interface downloadProps {
  content: string;
  fileName: string;
}

const downloadTextFile = ({ content, fileName }: downloadProps) => {
  const element = document.createElement("a");
  const file = new Blob([content], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = `${fileName}.txt`;
  document.body.appendChild(element);
  element.click();
};

export default downloadTextFile;
