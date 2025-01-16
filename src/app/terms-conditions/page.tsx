import H1 from "@/components/h1";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex max-w-[60rem] flex-col gap-y-7 px-16 py-16 leading-relaxed">
      <H1>Evento Terms and Conditions</H1>

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

      <H1 className="text-2xl lg:text-2xl">AGREEMENT TO TERMS</H1>

      <p>
        These Terms and Conditions constitute a legally binding agreement made
        between you, whether personally or on behalf of an entity (“you”) and
        EventoEvents (“we,” “us” or “our”), concerning your access to and use of
        the{" "}
        <a className="text-blue-400" href="#">
          evento.com
        </a>{" "}
        website as well as any other media form, media channel, mobile website
        or mobile application related, linked, or otherwise connected thereto
        (collectively, the “Site”).
      </p>

      <p>
        You agree that by accessing the Site, you have read, understood, and
        agree to be bound by all of these Terms and Conditions. If you do not
        agree with all of these Terms and Conditions, then you are expressly
        prohibited from using the Site and you must discontinue use immediately.
      </p>

      <H1 className="text-2xl lg:text-2xl">INTELLECTUAL PROPERTY RIGHTS</H1>

      <p>
        Unless otherwise indicated, the Site is our proprietary property and all
        source code, databases, functionality, software, website designs, audio,
        video, text, photographs, and graphics on the Site (collectively, the
        “Content”) and the trademarks, service marks, and logos contained
        therein (the “Marks”) are owned or controlled by us or licensed to us,
        and are protected by copyright and trademark laws and various other
        intellectual property rights and unfair competition laws of the United
        States, foreign jurisdictions, and international conventions.
      </p>

      <H1 className="text-2xl lg:text-2xl">PROHIBITED ACTIVITIES</H1>

      <p>
        You may not access or use the Site for any purpose other than that for
        which we make the Site available. The Site may not be used in connection
        with any commercial endeavors except those that are specifically
        endorsed or approved by us.
      </p>

      <p>As a user of the Site, you agree not to:</p>

      <ol className="list-decimal pl-5">
        <li>
          Systematically retrieve data or other content from the Site to create
          or compile, directly or indirectly, a collection, compilation,
          database, or directory without written permission from us.
        </li>
        <li>
          Use a buying agent or purchasing agent to make purchases on the Site.
        </li>
        <li>
          Trick, defraud, or mislead us and other users, especially in any
          attempt to learn sensitive account information such as user passwords;
        </li>
      </ol>
    </main>
  );
}
