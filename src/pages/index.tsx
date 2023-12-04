import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { useEffect, useState } from "react";
import { RunnerListItem } from "../components/RunnerListItem";

const apiKey =
  "MK4KtrSxvYJrF4JjghfnKjzciEgetkg5KbHhBqXSPMy4lZwRkcqjC3cCLypYwD7a";

export const pageStyles = {
  color: "#232129",
  padding: 42,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
export const doclistStyles = {
  paddingLeft: 0,
};
export const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

export const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  },
];

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

interface Runner {
  id: string;
  name: string;
  runner: string;
}
const IndexPage: React.FC<PageProps> = () => {
  const [runners, setRunners] = useState<Runner[]>([]);
  useEffect(() => {
    const fetchRunners = async () => {
      const res = await fetch(
        "https://data.mongodb-api.com/app/data-khocl/endpoint/runners",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiKey,
          },
        }
      );
      const json = await res.json();
      setRunners(json.result);
    };

    fetchRunners();
  }, []);

  const getLoginUrl = () => {
    if (typeof window === "undefined") return "/";
    const redirect_uri = new URL("https://www.strava.com");
    redirect_uri.pathname = "/oauth/authorize";
    redirect_uri.searchParams.append("response_type", "code");
    redirect_uri.searchParams.append("client_id", "78592");
    // TODO: generate random state
    redirect_uri.searchParams.append("state", "1234");
    redirect_uri.searchParams.append("scope", "read");
    redirect_uri.searchParams.append(
      "redirect_uri",
      `${window.location.origin}/auth`
    );
    return redirect_uri.toString();
  };

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>ølløp</h1>
      <h2>
        <a style={linkStyle} href={getLoginUrl()}>
          link strava account
        </a>
      </h2>
      {runners ? (
        runners.map((runner) => <RunnerListItem key={runner.id} {...runner} />)
      ) : (
        <li style={docLinkStyle}> getting runners...</li>
      )}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
