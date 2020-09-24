import React, { Fragment} from "react";

interface InputType {
  inputType: "Title" | "Description";
}

interface IProject {
  title: string;
  done: boolean;
}

const divStyle = {
  padding: "10px",
  margin: "10px",
};

// const [description, setDescription] = React.useState("");

export class ProjectInput extends React.Component<InputType> {
 inputTextBlock(Props: string) {
    // const [title, setTitle] = useState<string>("");
    // const [projects, setProjects] = useState<IProject[]>([]);

    // const addProject = (titleProj: string) => {
    //   const newProject = [...projects, { title: titleProj, done: false }];
    //   setProjects(newProject);
    // };

    switch (Props) {
      case "Title ":
        return (
          <form>
            <label>
              <input type="text" />
            </label>
          </form>
        );
      case "Description":
        return (
          <form>
            <label>
              <textarea />
            </label>
          </form>
        );
    }
  }

  render() {
    const handleSubmint = () => {
      console.log("kfue");
    };
    return (
      <Fragment>
        <form onSubmit={handleSubmint}>
          {" "}
          <div style={divStyle}> Project {this.props.inputType}</div>
          {this.inputTextBlock(this.props.inputType)}
        </form>
      </Fragment>
    );
  }
}
