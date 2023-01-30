const downloadTextFile = () => {
  const element = document.createElement("a");
  const file = new Blob(["hello"], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  document.body.appendChild(element);
  element.click();
};

export default downloadTextFile;
