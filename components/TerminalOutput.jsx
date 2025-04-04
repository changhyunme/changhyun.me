export default function TerminalOutput({ output }) {
    return (
      <pre className="bg-black text-green-500 p-4 rounded font-mono overflow-x-auto">
        {output}
      </pre>
    );
  }