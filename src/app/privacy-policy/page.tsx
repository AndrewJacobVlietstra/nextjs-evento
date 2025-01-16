import H1 from "@/components/h1";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex max-w-[60rem] flex-col gap-y-8 px-16 py-16 leading-relaxed">
      <H1>Privacy Notice</H1>

      <p>
        Last updated:{" "}
        <span className="font-bold text-blue-200">
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </span>
      </p>

      <p className="">
        This privacy notice for EventoEvents (doing business as Evento) (“
        <b>Company</b>,” “<b>we</b>,” “<b>us</b>,” or “<b>our</b>“), describes
        how and why we might collect, store, use, and/or share (“<b>process</b>
        “) your information when you use our services (“<b>Services</b>“), such
        as when you:
      </p>

      <ul className="list-outside list-disc pl-5">
        <li>
          Visit our website at{" "}
          <a className="text-blue-400" href="#">
            evento.com
          </a>
          , or any website of ours that links to this privacy notice
        </li>

        <li>
          Download and use our application(s), such as our mobile application —
          <b>EventoMobile</b>, or any other application of ours that links to
          this privacy notice
        </li>

        <li>
          Engage with us in other related ways ― including any sales, marketing,
          or events
        </li>
      </ul>

      <p>
        Questions or concerns? Reading this privacy notice will help you
        understand your privacy rights and choices. If you do not agree with our
        policies and practices, please do not use our Services. If you still
        have any questions or concerns, please contact us at{" "}
        <a className="text-blue-400" href="#">
          evento-customersupport@gmail.com
        </a>
        .
      </p>

      <p>
        This privacy policy was created by <b>EventoEvents</b>.
      </p>
    </main>
  );
}
