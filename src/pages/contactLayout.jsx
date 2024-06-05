import { Helmet } from "react-helmet";
import ContactMe from "./Contact";

const contactLayout = () => {
  return (
    <Helmet>
      <title>Contact | Reda Assemghor,developer&designer</title>
      <meta name="description" content="contact me page" />
      <ContactMe />
    </Helmet>
  );
};

export default contactLayout;
