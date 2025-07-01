import { Welcome } from "../welcome/welcome";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // ESLintエラー: 未使用変数
  const unusedVariable = "This will trigger ESLint error";
  const anotherUnused = 123;
  
  // TypeScriptエラー: 型不一致
  const numberVar: number = "this is string"; // Type error!
  
  // さらにフォーマットエラーも追加
  return <Welcome/>;
}
