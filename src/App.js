import Accordion from "./components/Accordion";

const App = () => {
  const items = [
    {
      _id: "321",
      label: "can i use react on a project",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur distinctio dolores hic possimus quaerat\n",
    },
    {
      _id: "323211",
      label: "can i use javascript on a project",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, officia!",
    },
    {
      _id: "321312",
      label: "can i use css on a project",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam beatae, culpa eaque exercitationem fugiat harum iure reprehenderit velit voluptates?",
    },
  ];
  return <Accordion items={items} />;
};

export default App;
