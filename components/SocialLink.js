import Stack from "./Stack";

const SocialLink = ({ icon: Icon, href, label, color = "#000" }) => (
  <>
    <style jsx>{`
      .social-link {
        color: ${color};
        fill: ${color};
        text-decoration: none;
      }
      .social-link:hover {
        text-decoration: underline;
      }
    `}</style>
    <a className="social-link" href={href}>
      <Stack tag="span" gap={5} alignItems="center" direction="horizontal">
        <Icon color={"reset"} />
        {label}
      </Stack>
    </a>
  </>
);

export default SocialLink;
