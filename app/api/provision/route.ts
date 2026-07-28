import { NextRequest, NextResponse } from "next/server";

const DASHBOARD_API = process.env.DASHBOARD_API_URL || "http://127.0.0.1:8096";
const DASHBOARD_ADMIN_EMAIL = process.env.DASHBOARD_ADMIN_EMAIL || "admin@calamaritrading.ai";
const DASHBOARD_ADMIN_PASSWORD = process.env.DASHBOARD_ADMIN_PASSWORD || "CalAdmin2024!";
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "587");
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@calamaritrading.ai";

// Get admin JWT token
async function getAdminToken(): Promise<string> {
  const res = await fetch(`${DASHBOARD_API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: DASHBOARD_ADMIN_EMAIL,
      password: DASHBOARD_ADMIN_PASSWORD,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Admin login failed: ${err}`);
  }

  const data = await res.json();
  return data.token;
}

// Create a tenant
async function createTenant(token: string, name: string, slug: string) {
  const res = await fetch(`${DASHBOARD_API}/api/admin/tenants`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, slug }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Tenant creation failed: ${err}`);
  }

  return res.json();
}

// Create a user
async function createUser(
  token: string,
  email: string,
  password: string,
  fullName: string,
  tenantId: string
) {
  const res = await fetch(`${DASHBOARD_API}/api/admin/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email,
      password,
      full_name: fullName,
      role: "trader",
      tenant_id: tenantId,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`User creation failed: ${err}`);
  }

  return res.json();
}

// Send welcome email via nodemailer
async function sendWelcomeEmail(
  to: string,
  fullName: string,
  plan: string,
  dashboardUrl: string
) {
  // Only send if SMTP is configured
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log(`[EMAIL] Would send welcome email to ${to} (SMTP not configured)`);
    return;
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const planNames: Record<string, string> = {
      starter: "Starter ($49/mo)",
      pro: "Pro ($99/mo)",
      enterprise: "Enterprise ($199/mo)",
    };

    await transporter.sendMail({
      from: `"Calamari Trading" <${FROM_EMAIL}>`,
      to,
      subject: "Welcome to Calamari Trading — Your account is ready 🦑",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #060710; color: #F1F5F9; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
    .header { text-align: center; margin-bottom: 40px; }
    .logo-text { font-size: 28px; font-weight: 900; background: linear-gradient(135deg, #4F46E5, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .card { background: #0F1120; border: 1px solid #1E2035; border-radius: 16px; padding: 32px; margin-bottom: 24px; }
    h1 { font-size: 24px; font-weight: 800; color: #F1F5F9; margin: 0 0 16px; }
    p { color: #94A3B8; line-height: 1.6; margin: 0 0 16px; }
    .highlight { color: #06B6D4; font-weight: 600; }
    .btn { display: inline-block; background: linear-gradient(135deg, #4F46E5, #06B6D4); color: white; text-decoration: none; padding: 14px 28px; border-radius: 12px; font-weight: 700; font-size: 16px; margin: 16px 0; }
    .steps { list-style: none; padding: 0; margin: 0; }
    .steps li { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid #1E2035; color: #94A3B8; font-size: 14px; }
    .steps li:last-child { border-bottom: none; }
    .step-num { width: 24px; height: 24px; border-radius: 50%; background: rgba(79, 70, 229, 0.2); color: #4F46E5; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
    .footer { text-align: center; color: #475569; font-size: 12px; margin-top: 32px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo-text">🦑 Calamari Trading</div>
    </div>
    
    <div class="card">
      <h1>Welcome aboard, ${fullName}! 🎉</h1>
      <p>Your <span class="highlight">${planNames[plan] || plan}</span> account has been created and your VPS is being provisioned right now.</p>
      <p>You'll be up and running within the next 5–15 minutes. Here's what to expect:</p>
      
      <ul class="steps">
        <li>
          <div class="step-num">1</div>
          <span>Your dedicated Windows VPS is being spun up with MT5 pre-installed</span>
        </li>
        <li>
          <div class="step-num">2</div>
          <span>The Tentacle agent is being configured and connected to your dashboard</span>
        </li>
        <li>
          <div class="step-num">3</div>
          <span>Log in to your dashboard and add your MT5 credentials to get started</span>
        </li>
      </ul>
    </div>
    
    <div style="text-align: center;">
      <a href="${dashboardUrl}" class="btn">Access Your Dashboard →</a>
    </div>
    
    <div class="card">
      <p style="margin: 0; font-size: 14px;"><strong style="color: #F1F5F9;">Your login email:</strong> <span class="highlight">${to}</span></p>
      <p style="margin: 8px 0 0; font-size: 14px; color: #64748B;">Use the password you set during signup.</p>
    </div>
    
    <div class="footer">
      <p>Questions? Reply to this email or contact <a href="mailto:support@calamaritrading.ai" style="color: #06B6D4;">support@calamaritrading.ai</a></p>
      <p style="margin-top: 8px;">© ${new Date().getFullYear()} Calamari Trading. Built by traders, for traders.</p>
    </div>
  </div>
</body>
</html>
      `,
    });

    console.log(`[EMAIL] Welcome email sent to ${to}`);
  } catch (err) {
    console.error("[EMAIL] Failed to send welcome email:", err);
    // Don't throw — email failure shouldn't block account creation
  }
}

// Generate a slug from name
function generateSlug(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 30) +
    "-" +
    Math.random().toString(36).slice(2, 7)
  );
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, password, plan } = body;

    // Validate required fields
    if (!fullName || !email || !password || !plan) {
      return NextResponse.json(
        { error: "Missing required fields: fullName, email, password, plan" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // Step 1: Get admin token
    let adminToken: string;
    try {
      adminToken = await getAdminToken();
    } catch (err) {
      console.error("[PROVISION] Admin login failed:", err);
      return NextResponse.json(
        { error: "Service temporarily unavailable. Please try again." },
        { status: 503 }
      );
    }

    // Step 2: Create tenant
    const tenantName = fullName + "'s Account";
    const tenantSlug = generateSlug(fullName);

    let tenant: any;
    try {
      tenant = await createTenant(adminToken, tenantName, tenantSlug);
    } catch (err: any) {
      console.error("[PROVISION] Tenant creation failed:", err);
      return NextResponse.json(
        { error: "Failed to create account. Please try again." },
        { status: 500 }
      );
    }

    const tenantId = tenant.id || tenant.tenant_id;
    if (!tenantId) {
      console.error("[PROVISION] No tenant ID in response:", tenant);
      return NextResponse.json(
        { error: "Account creation error. Please contact support." },
        { status: 500 }
      );
    }

    // Step 3: Create user
    let user: any;
    try {
      user = await createUser(adminToken, email, password, fullName, tenantId);
    } catch (err: any) {
      console.error("[PROVISION] User creation failed:", err);
      // Check if it's a duplicate email error
      if (err.message && err.message.includes("already exists")) {
        return NextResponse.json(
          { error: "An account with this email already exists. Please log in." },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Failed to create user account. Please try again." },
        { status: 500 }
      );
    }

    // Step 4: Send welcome email (non-blocking)
    const dashboardUrl = "https://dashboard.calamaritrading.ai";
    sendWelcomeEmail(email, fullName, plan, dashboardUrl).catch((err) => {
      console.error("[PROVISION] Welcome email failed:", err);
    });

    // Step 5: Log the new signup
    console.log(`[PROVISION] New signup: ${email} (${plan}) - tenant: ${tenantId}`);

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully",
        dashboardUrl,
        email,
        tenantId,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[PROVISION] Unexpected error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
