import React from "react";
import "./Icon.css";

const Icon = (props) => {
  let iconClassName = ["iconify"];
  iconClassName.push(props.size);

  switch (props.name) {
    case "Javascript":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:javascript"
          data-inline="false"
        ></span>
      );
    case "Typescript":
      return (
        <span
          data-icon="vscode-icons:file-type-typescript-official"
          data-inline="false"
          className={iconClassName.join(" ")}
        ></span>
      );
    case "Cpp":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:c-plusplus"
          data-inline="false"
        ></span>
      );

    case "Java":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:java"
          data-inline="false"
        ></span>
      );

    case "Reactjs":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="vscode-icons:file-type-reactjs"
          data-inline="false"
        ></span>
      );

    case "Redux":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="simple-icons:redux"
          data-inline="false"
        ></span>
      );

    case "Nextjs":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:nextjs"
          data-inline="false"
        ></span>
      );

    case "HTML5":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="fontisto:html5"
          data-inline="false"
        ></span>
      );
    case "CSS3":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="fontisto:css3"
          data-inline="false"
        ></span>
      );

    case "Bootstrap":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:bootstrap"
          data-inline="false"
        ></span>
      );

    case "Styled-Components":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="file-icons:styledcomponents"
          data-inline="false"
        ></span>
      );
    case "Nodejs":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:nodejs-icon"
          data-inline="false"
        ></span>
      );

    case "Expressjs":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:express"
          data-inline="false"
        ></span>
      );

    case "MongoDB":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="whh:mongodb"
          data-inline="false"
        ></span>
      );

    case "Sequelize":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="vscode-icons:file-type-sequelize"
          data-inline="false"
        ></span>
      );
    case "Socket.io":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="cib:socket-io"
          data-inline="false"
        ></span>
      );

    case "GraphQL":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:graphql"
          data-inline="false"
        ></span>
      );

    case "Git":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:git-icon"
          data-inline="false"
        ></span>
      );

    case "Postman":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:postman-icon"
          data-inline="false"
        ></span>
      );

    case "Heroku":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:heroku-icon"
          data-inline="false"
        ></span>
      );

    case "npm":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="logos:npm"
          data-inline="false"
        ></span>
      );

    case "vs-code":
      return (
        <span
          className={iconClassName.join(" ")}
          data-icon="vscode-icons:file-type-vscode"
          data-inline="false"
        ></span>
      );

    case "preview":
      return (
        <span
          className="iconify"
          data-icon="dashicons:welcome-view-site"
          data-inline="false"
        ></span>
      );

    case "github":
      return (
        <span
          className="iconify"
          data-icon="akar-icons:github-fill"
          data-inline="false"
        ></span>
      );

    case "gif":
      return (
        <span
          className="iconify"
          data-icon="bx:bxs-file-gif"
          data-inline="false"
        ></span>
      );

    case "twitter":
      return (
        <span
          className="iconify"
          data-icon="logos:twitter"
          data-inline="false"
        ></span>
      );

    case "linkedin":
      return (
        <span
          className="iconify"
          data-icon="logos:linkedin-icon"
          data-inline="false"
        ></span>
      );

    case "hashnode":
      return (
        <span
          className="iconify"
          data-icon="logos:hashnode-icon"
          data-inline="false"
        ></span>
      );
	
	case "Firebase":
		return (
      <span
        className={iconClassName.join(" ")}
        data-icon="logos:firebase"
        data-inline="false"
      ></span>
    );
    default:
      return <span className={iconClassName.join(" ")}></span>;
  }
};

export default Icon;
