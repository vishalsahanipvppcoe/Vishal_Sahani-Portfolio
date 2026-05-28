import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import ContactForm from './ContactForm';

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>

        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Open to opportunities and professional collaborations
        </PageHeaderHeading>

        <PageHeaderDescription>
          Currently seeking internship and entry-level software engineering opportunities.
          Focused on backend systems, scalable web applications, and real-world problem solving.
        </PageHeaderDescription>

        <PageHeaderDescription>
          You can reach out using the form below or directly via email at 
          <strong> vishalsahani1018@gmail.com</strong>.
        </PageHeaderDescription>
      </PageHeader>

      <div className="mt-6">
        <ContactForm />
      </div>

      <Pager
        prevHref="/education"
        nextHref="/"
        prevTitle="Education"
        nextTitle="Home"
      />
    </>
  );
};

export default ContactPage;