import {
  siAndroid,
  siApachejmeter,
  siApachemaven,
  siAppium,
  siBitbucket,
  siConfluence,
  siCucumber,
  siDocker,
  siGit,
  siGithub,
  siIos,
  siJavascript,
  siJenkins,
  siJira,
  siK6,
  siMongodb,
  siNextdotjs,
  siPostman,
  siSwagger,
  siTypescript,
  siVitest,
  siWebdriverio,
  type SimpleIcon,
} from "simple-icons";

import { readableBrandColor } from "./brand-color";

/** Presentation concern: which brand mark, if any, accompanies a tool name. */
const ICON_RULES: readonly (readonly [RegExp, SimpleIcon])[] = [
  [/docker/i, siDocker],
  [/jenkins/i, siJenkins],
  [/appium/i, siAppium],
  [/webdriver/i, siWebdriverio],
  [/bdd|gherkin|cucumber/i, siCucumber],
  [/postman/i, siPostman],
  [/swagger/i, siSwagger],
  [/^k6$/i, siK6],
  [/jmeter/i, siApachejmeter],
  [/jira/i, siJira],
  [/confluence/i, siConfluence],
  [/mongo/i, siMongodb],
  [/^git$/i, siGit],
  [/github/i, siGithub],
  [/bitbucket/i, siBitbucket],
  [/maven/i, siApachemaven],
  [/typescript/i, siTypescript],
  [/^javascript$/i, siJavascript],
  [/^android$/i, siAndroid],
  [/^ios$/i, siIos],
  [/next\.?js/i, siNextdotjs],
  [/vitest/i, siVitest],
];

export function iconFor(name: string): SimpleIcon | undefined {
  return ICON_RULES.find(([pattern]) => pattern.test(name))?.[1];
}

export function ToolMark({ icon, size }: { icon: SimpleIcon; size: number }) {
  return (
    <svg className="tool-icon" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={icon.path} fill={readableBrandColor(icon.hex)} />
    </svg>
  );
}

export function Tool({ name }: { name: string }) {
  const icon = iconFor(name);
  return (
    <span className="tool">
      {icon && <ToolMark icon={icon} size={15} />}
      {name}
    </span>
  );
}

export function ToolList({ items }: { items: readonly string[] }) {
  return (
    <ul className="tools">
      {items.map((item) => (
        <li key={item}>
          <Tool name={item} />
        </li>
      ))}
    </ul>
  );
}
