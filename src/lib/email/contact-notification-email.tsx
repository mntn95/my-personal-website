import { Html, Head, Body, Text, Section } from "@react-email/components";
import * as React from "react";

interface ContactNotificationEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactNotificationEmail = ({
  name,
  email,
  subject,
  message,
}: ContactNotificationEmailProps): React.ReactElement => {
  return (
    <Html lang="fr">
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#1a1a1a",
          color: "#ffffff",
          padding: "20px",
          lineHeight: "1.6",
        }}
      >
        <Section
          style={{
            backgroundColor: "#2a2a2a",
            borderRadius: "8px",
            padding: "30px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#10b981",
              marginBottom: "20px",
            }}
          >
            Nouvelle demande de contact
          </Text>

          <Section style={{ marginBottom: "20px" }}>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              De:
            </Text>
            <Text style={{ fontSize: "14px", color: "#d1d5db", margin: 0 }}>
              {name} ({email})
            </Text>
          </Section>

          <Section style={{ marginBottom: "20px" }}>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              Sujet:
            </Text>
            <Text style={{ fontSize: "14px", color: "#d1d5db", margin: 0 }}>
              {subject}
            </Text>
          </Section>

          <Section style={{ marginBottom: "20px" }}>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              Message:
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: "#d1d5db",
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </Section>
        </Section>
      </Body>
    </Html>
  );
};

export default ContactNotificationEmail;
