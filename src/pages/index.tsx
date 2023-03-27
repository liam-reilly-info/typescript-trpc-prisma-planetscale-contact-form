import { type NextPage } from "next";
import Head from "next/head";
import ContactForm from "~/components/forms/contact/contact";
import SubmissionGrid from "~/components/submission-grid/submission-grid";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Liams Contact Form</title>
        <meta name="description" content="Contact Form Demo" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <ContactForm title="Contact Us" />
        <SubmissionGrid />
      </main>
    </>
  );
};

export default Home;
