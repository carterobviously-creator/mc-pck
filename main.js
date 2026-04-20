async function start() {
  const prompt = document.getElementById("prompt").value;

  // Ask Pollinations GPT to create a task list
  const response = await fetch("https://text.pollinations.ai/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Return a short list of tasks needed to build a Minecraft Bedrock addon." },
        { role: "user", content: prompt }
      ]
    })
  });

  const data = await response.json();
  const tasks = data.choices[0].message.content;

  // Open a new tab to show the tasks
  const tab = window.open("", "_blank");
  tab.document.write(`
    <pre style="background:#0a0a0a; color:#eee; padding:20px; font-family:monospace;">
${tasks}
    </pre>
  `);
}
