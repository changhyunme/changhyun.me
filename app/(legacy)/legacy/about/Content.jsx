"use client";

import ContentSide from "@/components/ContentSide";
import ContentBody from "@/components/ContentBody";
import Grid from "@/components/ui/Grid";
import GridTechItem from "@/components/ui/GridTechItem";
import Header from "@/components/ui/Header";
import Blockquote from "@/components/ui/Blockquote";
import PageHeader from "@/components/ui/PageHeader";
import PageFooter from "@/components/ui/PageFooter";
import { useSectionObserver } from "@/hooks/useSectionObserver";
import { useSectionStore } from "@/store/sectionStore";
import useStore from "@/store/uiStore";
import useTranslation from "@/hooks/useTranslation";

export default function Content() {
  const { t } = useTranslation();
  const sections = [
    "philosophy", "about", "stack", "modern", "experimental",
    "node", "legacy", "languages", "ui", "databases",
    "infra", "tools", "others",
  ];
  useSectionObserver(sections);
  const activeId = useSectionStore((state) => state.activeId);
  const { breitbild } = useStore();

  const menuItems = [
    { id: "philosophy", label: t("pages.about.menuPhilosophy") },
    { id: "about", label: t("pages.about.menuAbout") },
    {
      id: "stack",
      label: t("pages.about.menuStack"),
      children: [
        { id: "modern", label: t("pages.about.menuModern") },
        { id: "experimental", label: t("pages.about.menuExperimental") },
        { id: "node", label: t("pages.about.menuNode") },
        { id: "legacy", label: t("pages.about.menuLegacy") },
        { id: "languages", label: t("pages.about.menuLanguages") },
        { id: "ui", label: t("pages.about.menuUI") },
        { id: "databases", label: t("pages.about.menuDatabases") },
        { id: "infra", label: t("pages.about.menuInfra") },
        { id: "tools", label: t("pages.about.menuTools") },
        { id: "others", label: t("pages.about.menuOthers") },
      ],
    }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = window.innerHeight * (breitbild ? 0.05 : 0.1);
      const y = el.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const renderMenu = (items) => (
    <ul className="ml-3 space-y-1 text-sm">
      {items.map(({ id, label, children }) => (
        <li key={id} className="list-disc">
          <div
            className={`cursor-pointer ${
              activeId === id ? "text-accent font-semibold" : "font-medium"
            }`}
            onClick={() => scrollToSection(id)}
          >
            {label}
          </div>
          {children && (
            <ul className="list-decimal ml-3 mt-1 space-y-1">
              {children.map(({ id, label }) => (
                <li
                  key={id}
                  className={`cursor-pointer ${
                    activeId === id ? "text-accent font-semibold" : ""
                  }`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
        <ContentSide className="hidden md:block">
            {renderMenu(menuItems)}
        </ContentSide>
        <ContentBody className="text-text">
            <PageHeader title={t("pages.about.title")} />
            <p>
              {t("pages.about.intro1")}
            </p>
            <Blockquote>
                {t("pages.about.intro2")}<br />
                {t("pages.about.intro3")}<br />
                {t("pages.about.intro4")}
            </Blockquote>

            <Header id="philosophy">{t("pages.about.menuPhilosophy")}</Header>

                {t("pages.about.philosophy")}

            <Header id="about">{t("pages.about.menuAbout")}</Header>

                <Blockquote>
                {t("pages.about.aboutQuote1")}<br /><br />
                {t("pages.about.aboutQuote2")}
                </Blockquote>

            {/* <Header>Interests</Header>
                Reading, music, motorcycles, fishing, and building personal websites — oh, and I play the violin 🎻 (plus I nerd out on scoring sheet music 🎼). */}

            <Header id="stack">{t("pages.about.menuStack")}</Header>
                {t("pages.about.stackIntro")}
            <Blockquote>
                {t("pages.about.stackQuote")}
            </Blockquote>

            <Header id="modern">{t("pages.about.modernTitle")}</Header>
            <Grid>
                <GridTechItem name="Next.js" icon="nextjs" size="30" star="1" />
                <GridTechItem name="React" icon="react" size="30" star="1" />
                <GridTechItem name="Tailwind CSS" icon="tailwind" size="30" star="1" />
            </Grid>
            <Blockquote>
                {t("pages.about.modernQuote")}
            </Blockquote>

            <Header id="experimental">{t("pages.about.experimentalTitle")}</Header>
            <Grid>
                <GridTechItem name="Astro" icon="astro" size="30" heart="1" />
                <GridTechItem name="SvelteKit" icon="svelte" size="30" />
            </Grid>
            <Blockquote>
                {t("pages.about.experimentalQuote")}
            </Blockquote>

            <Header id="node">{t("pages.about.nodeTitle")}</Header>
            <Grid>
                <GridTechItem name="Node.js" icon="nodejs" size="30" />
                <GridTechItem name="Express" icon="nodejs" size="30" star="1" />
                <GridTechItem name="Socket.io" icon="nodejs" size="30" star="1" />
                <GridTechItem name="ejs" icon="nodejs" size="30"/>
            </Grid>
            <Blockquote>
                {t("pages.about.nodeQuote")}
            </Blockquote>

            <Header id="legacy">{t("pages.about.legacyTitle")}</Header>
            <Grid>
                <GridTechItem name="apache" icon="apache" size="30" />
                <GridTechItem name="PHP" icon="php" size="30" />
                <GridTechItem name="MySQL" icon="mysql" size="30" />
            </Grid>
            <Blockquote>
                {t("pages.about.legacyQuote")}
            </Blockquote>

            <Header id="languages">{t("pages.about.languagesTitle")}</Header>
            <Grid>
                <GridTechItem name="Go" icon="go" size="30" />
                <GridTechItem name="Python" icon="python" size="30" />
                {/* <GridTechItem name="Clojure" icon="clojure" size="30" /> */}
            </Grid>
            <Blockquote>
                {t("pages.about.languagesQuote")}
            </Blockquote>

            <Header id="ui">{t("pages.about.uiTitle")}</Header>
            <Grid>
                <GridTechItem name="Tailwind CSS" icon="tailwind" size="30" star="1" />
                <GridTechItem name="Sass" icon="sass" size="30" />
                <GridTechItem name="less" icon="less" size="30" heart="1"/>
                <GridTechItem name="Bootstrap" icon="bootstrap" size="30" />
                <GridTechItem name="CSS" icon="css3" size="30" />
            </Grid>
            <Blockquote>
                {t("pages.about.uiQuote")}
            </Blockquote>

            <Header id="databases">{t("pages.about.databasesTitle")}</Header>
            <Grid>
                <GridTechItem name="MongoDB" icon="mongodb" size="30" />
                <GridTechItem name="PostgreSQL" icon="postgres" size="30" />
                <GridTechItem name="MySQL" icon="mysql" size="30" />
            </Grid>
            <Blockquote>
                {t("pages.about.databasesQuote")}
            </Blockquote>

            <Header id="infra">{t("pages.about.infraTitle")}</Header>
            <Grid>
                <GridTechItem name="Vercel" icon="vercel" size="30" star="2" heart="1" />
                <GridTechItem name="Serverless" icon="serverless" size="30" />
                <GridTechItem name="AWS" icon="aws" size="30" />
                <GridTechItem name="Firebase" icon="firebase" size="30" />
                <GridTechItem name="Clodflare" icon="clodflare" size="30" />
                <GridTechItem name="nginx" icon="nginx" size="30" />
            </Grid>
            <Blockquote>
                {t("pages.about.infraQuote")}
            </Blockquote>

            <Header id="tools">{t("pages.about.toolsTitle")}</Header>
            <Grid>
            <GridTechItem name="Figma" icon="figma" size="30" />
                <GridTechItem name="Designer" icon="affinityDesigner" size="30" star="1" />
                <GridTechItem name="Publisher" icon="affinityPublisher" size="30" />
                <GridTechItem name="Illustrator" icon="illustrator" size="30" />
            </Grid>
            <Blockquote>
                {t("pages.about.toolsQuote")}
            </Blockquote>

            <Header id="others">{t("pages.about.othersTitle")}</Header>
            <Grid>
                <GridTechItem name="jQuery" icon="jquery" size="30" />
                <GridTechItem name="Wordpress" icon="wordpress" size="30" />
                <GridTechItem name="GNUBoard(legacy)" icon="PHP" size="30" />
                <GridTechItem name="XE(legacy)" icon="PHP" size="30" />
            </Grid>
            <Blockquote>
                {t("pages.about.othersQuote")}
            </Blockquote>
            <PageFooter/>
        </ContentBody>
    </>
  );
}
