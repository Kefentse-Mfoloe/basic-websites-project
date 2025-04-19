function Example({ title, desciption, code }) {
  return (
    <div id="tab-content">
        <h3>{title}</h3>
        <p>{desciption}</p>
        <pre>
            <code>{code}</code>
        </pre>
    </div>
  );
}

export default Example;