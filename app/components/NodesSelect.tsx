import { nodeCategories } from "~/lib/db";

type NodesSelectProps = {
  value: string[];
  onChange: (value: string[]) => void;
};
export default function NodesSelect({ value, onChange }: NodesSelectProps) {
  return (
    <section>
      <h3>Nodes</h3>
      {nodeCategories.map((nodeCategory) => (
        <section key={nodeCategory.title}>
          <h4>{nodeCategory.title}</h4>
          {nodeCategory.types.map((nodeTypes) => (
            <label key={nodeTypes.title}>
              {nodeTypes.title}{" "}
              <input
                type="checkbox"
                checked={value.includes(nodeTypes.title)}
                onChange={(event) => {
                  let newValue = [...value];
                  if (event.target.checked) {
                    newValue.push(nodeTypes.title);
                  } else {
                    const index = newValue.indexOf(nodeTypes.title);
                    newValue.splice(index, 1);
                  }
                  onChange(newValue);
                }}
              />
            </label>
          ))}
        </section>
      ))}
    </section>
  );
}
