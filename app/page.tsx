"use client";

import { MessageCircle, Instagram } from "lucide-react";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0b3d2e 0%, #06261d 100%)",
        color: "white",
        fontFamily: "Tahoma, Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "28px" }}>
          وبالقرآن نحيا
        </h1>
        <p style={{ margin: "8px 0 0", opacity: 0.9 }}>
          أكاديمية تحفيظ قرآن أونلاين
        </p>
      </header>

      {/* Hero */}
      <section style={{ padding: "30px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
          نصنع جيلاً يعيش بالمنهج الرباني
        </h2>
        <p style={{ lineHeight: "1.9", opacity: 0.95 }}>
          حلقات تحفيظ فردية عبر برنامج زوم
          <br />
          للأطفال والكبار مع متابعة وتقارير منتظمة
        </p>
      </section>

      {/* Packages */}
      <section style={{ padding: "20px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          الباقات الشهرية
        </h3>

        <div style={cardStyle}>
          <h4>٨ جلسات</h4>
          <p>حلقتان أسبوعيًا – مدة الحلقة 30 دقيقة</p>
          <strong>125 درهم</strong>
        </div>

        <div style={cardStyle}>
          <h4>١٢ جلسة</h4>
          <p>3 حلقات أسبوعيًا – مدة الحلقة 30 دقيقة</p>
          <strong>150 درهم</strong>
        </div>

        <div style={cardStyle}>
          <h4>١٦ جلسة</h4>
          <p>4 حلقات أسبوعيًا – مدة الحلقة 30 دقيقة</p>
          <strong>200 درهم</strong>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: "30px 20px", textAlign: "center" }}>
        <h3>تواصلي معنا</h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "15px",
          }}
        >
          <a
            href="https://wa.me/201050951032"
            target="_blank"
            style={iconButton}
          >
            <MessageCircle size={22} />
          </a>

          <a
            href="https://www.instagram.com/wabelquran_n7ya"
            target="_blank"
            style={iconButton}
          >
            <Instagram size={22} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          fontSize: "14px",
          opacity: 0.8,
        }}
      >
        © {new Date().getFullYear()} وبالقرآن نحيا
      </footer>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  padding: "15px",
  borderRadius: "12px",
  marginBottom: "15px",
  textAlign: "center",
};

const iconButton: React.CSSProperties = {
  background: "white",
  color: "#0b3d2e",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
};
