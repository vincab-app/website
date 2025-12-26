import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 bg-white p-8 rounded-xl shadow">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-6">
            VinCab (“we”, “our”, or “us”) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and protect
            your information when you use the VinCab mobile application and
            related services.
          </p>

          <Section
            title="1. Information We Collect"
            content={
              <>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, phone number,
                    email address, and profile details.
                  </li>
                  <li>
                    <strong>Location Data:</strong> Real-time location to match
                    riders with drivers and provide navigation.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Transaction details
                    (we do not store full card or mobile money credentials).
                  </li>
                  <li>
                    <strong>Usage Data:</strong> App interactions, ride history,
                    and device information.
                  </li>
                </ul>
              </>
            }
          />

          <Section
            title="2. How We Use Your Information"
            content={
              <ul className="list-disc ml-6 space-y-2">
                <li>To provide and improve VinCab services</li>
                <li>To connect riders with nearby drivers</li>
                <li>To process payments and transactions</li>
                <li>To ensure safety and prevent fraud</li>
                <li>To communicate important updates and support messages</li>
              </ul>
            }
          />

          <Section
            title="3. Sharing of Information"
            content={
              <>
                <p>
                  We do not sell your personal information. We may share data
                  only with:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Drivers (limited data needed to complete a ride)</li>
                  <li>Payment service providers</li>
                  <li>Law enforcement where required by law</li>
                </ul>
              </>
            }
          />

          <Section
            title="4. Location Information"
            content={
              <p>
                VinCab uses location services to enable ride requests, navigation,
                and safety features. Location data is collected only when the app
                is in use or as permitted by your device settings.
              </p>
            }
          />

          <Section
            title="5. Data Security"
            content={
              <p>
                We implement reasonable technical and organizational measures to
                protect your information against unauthorized access, loss, or
                misuse. However, no system is completely secure.
              </p>
            }
          />

          <Section
            title="6. Your Rights"
            content={
              <ul className="list-disc ml-6 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your account</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            }
          />

          <Section
            title="7. Children’s Privacy"
            content={
              <p>
                VinCab does not knowingly collect personal information from
                children under the age of 18. If such data is discovered, it will
                be deleted promptly.
              </p>
            }
          />

          <Section
            title="8. Changes to This Policy"
            content={
              <p>
                We may update this Privacy Policy from time to time. Changes will
                be posted on this page with an updated revision date.
              </p>
            }
          />

          <Section
            title="9. Contact Us"
            content={
              <p>
                If you have questions about this Privacy Policy, please contact
                us at:
                <br />
                <strong>Email:</strong> support@vincab.com
              </p>
            }
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

function Section({ title, content }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">
        {content}
      </div>
    </div>
  );
}
