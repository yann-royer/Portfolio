// Projects, courses and skills.
// Everything that lists projects (home skill index, school.html, skills.html,
// project.html and the previous / next links) is built from the lists below.
// To add a project: add one entry to `portfolioProjects` (and its texts in i18n.js).

const skillGroups = [
  { id: "mech", key: "skills.group.mech" },
  { id: "elec", key: "skills.group.elec" },
  { id: "code", key: "skills.group.code" },
  { id: "ai", key: "skills.group.ai" },
];

// `label` is used as is (proper names); `key` is looked up in i18n.js.
const portfolioSkills = [
  { id: "solidworks", group: "mech", label: "SolidWorks" },
  { id: "3d-printing", group: "mech", key: "skill.print" },
  { id: "sheet-metal", group: "mech", key: "skillname.sheet" },
  { id: "flexures", group: "mech", key: "skillname.flexures" },
  { id: "balancing", group: "mech", key: "skillname.balancing" },
  { id: "fem", group: "mech", key: "skillname.fem" },
  { id: "machining", group: "mech", key: "skillname.machining" },
  { id: "machine-elements", group: "mech", key: "skillname.machine" },
  { id: "soft-robotics", group: "mech", key: "skillname.soft" },
  { id: "arduino", group: "elec", label: "Arduino" },
  { id: "sensors", group: "elec", key: "skillname.sensors" },
  { id: "motors", group: "elec", key: "skillname.motors" },
  { id: "rf-fpv", group: "elec", key: "skillname.fpv" },
  { id: "interfaces", group: "elec", key: "skillname.ui" },
  { id: "digital-logic", group: "elec", key: "skillname.logic" },
  { id: "embedded-cpp", group: "code", key: "skillname.embedded" },
  { id: "asm", group: "code", key: "skillname.asm" },
  { id: "python", group: "code", key: "skillname.python" },
  { id: "pytorch", group: "code", key: "skillname.pytorch" },
  { id: "graph-search", group: "ai", key: "skillname.graphsearch" },
  { id: "planning", group: "ai", key: "skillname.planning" },
  { id: "mdp", group: "ai", key: "skillname.mdp" },
  { id: "trajopt", group: "ai", key: "skillname.trajopt" },
  { id: "multi-agent", group: "ai", key: "skillname.multiagent" },
  { id: "gp", group: "ai", key: "skillname.gp" },
  { id: "bayes-dl", group: "ai", key: "skillname.bayesdl" },
  { id: "bo", group: "ai", key: "skillname.bo" },
];

// School courses, in the order they appear on school.html (most recent first).
// `termKey` is optional (semester shown next to the school).
const portfolioCourses = [
  { id: "pdm", key: "course.pdm", schoolKey: "school.eth.ma", termKey: "term.a2026" },
  { id: "pai", key: "course.pai", schoolKey: "school.eth.ma", termKey: "term.a2026" },
  { id: "rm", key: "course.rm", schoolKey: "school.eth.ma", termKey: "term.a2026" },
  { id: "cdm2", key: "course.cdm2", schoolKey: "school.epfl.ba" },
  { id: "mcu", key: "course.mcu", schoolKey: "school.epfl.ba", termKey: "term.s2025" },
  { id: "logic", key: "course.logic", schoolKey: "school.epfl.ba" },
  { id: "cm2", key: "course.cm2", schoolKey: "school.epfl.ba" },
];

const PDM_STATEMENT = "https://pdm4ar.github.io/exercises/";

// Projects with their own hand-written page have `href`.
// Smaller projects have a `detail` block instead and are shown by project.html?p=<id>.
// `statusKey` marks a project that is still being worked on.
const portfolioProjects = [
  // ---------- Personal ----------
  {
    id: "rc-car", category: "personal", href: "rc-car.html", title: "RC Car",
    img: "assets/img/rc-car/side.jpg", alt: "RC Car seen from the side",
    yearKey: "rc.year", summaryKey: "rc.summary",
    skills: ["solidworks", "3d-printing", "sheet-metal", "arduino", "motors", "rf-fpv", "embedded-cpp"],
  },
  {
    id: "gorider", category: "personal", href: "gorider.html", title: "GoRider",
    img: "assets/img/gorider/grass-left.jpg", alt: "Blue and orange GoRider units in the grass",
    yearKey: "gorider.year", summaryKey: "gorider.summary",
    skills: ["solidworks", "3d-printing", "arduino", "sensors", "embedded-cpp"],
  },
  {
    id: "lap-timer", category: "personal", href: "lap-timer.html", title: "Lap Timer",
    img: "assets/img/lap-timer/sensors.jpg", alt: "Orange Lap Timer with its ultrasonic sensor",
    yearKey: "lap.year", summaryKey: "lap.summary",
    skills: ["solidworks", "3d-printing", "arduino", "sensors", "interfaces", "embedded-cpp"],
  },
  {
    id: "alarm", category: "personal", href: "alarm.html", title: "Alarm Clock Enhancer",
    img: "assets/img/alarm/assistant.jpg", alt: "Alarm Clock Enhancer with its relay and light sensor",
    yearKey: "alarm.year", summaryKey: "alarm.summary",
    skills: ["solidworks", "3d-printing", "arduino", "sensors", "interfaces", "embedded-cpp"],
  },

  // ---------- ETH: Planning and Decision Making for Autonomous Robots ----------
  {
    id: "pdm-graph", category: "school", course: "pdm", titleKey: "pdm.ex02", summaryKey: "pdm.ex02.d",
    img: "assets/img/pdm4ar/graph.svg", alt: "Graph explored by breadth-first search",
    skills: ["graph-search", "python"],
    detail: { team: "fact.solo", body: "proj.graph.body", cap: "proj.graph.cap", link: PDM_STATEMENT + "02-graphsearch.html" },
  },
  {
    id: "pdm-informed", category: "school", course: "pdm", titleKey: "pdm.ex03", summaryKey: "pdm.ex03.d",
    img: "assets/img/pdm4ar/astar.svg", alt: "A* search on a grid with walls",
    skills: ["graph-search", "python"],
    detail: { team: "fact.solo", body: "proj.informed.body", cap: "proj.informed.cap", link: PDM_STATEMENT + "03-informedgraphsearch.html" },
  },
  {
    id: "pdm-dp", category: "school", course: "pdm", titleKey: "pdm.ex04", summaryKey: "pdm.ex04.d",
    img: "assets/img/pdm4ar/mdp.svg", alt: "Grid world with values and policy arrows",
    skills: ["mdp", "python"],
    detail: { team: "fact.solo", body: "proj.dp.body", cap: "proj.dp.cap", link: PDM_STATEMENT + "04-dynamicprogramming.html" },
  },
  {
    id: "pdm-dubins", category: "school", course: "pdm", titleKey: "pdm.ex05", summaryKey: "pdm.ex05.d",
    img: "assets/img/pdm4ar/dubins.svg", alt: "Dubins path between two poses",
    skills: ["planning", "python"],
    detail: { team: "fact.solo", body: "proj.dubins.body", cap: "pdm.cap.dubins", link: PDM_STATEMENT + "05-dubinspath.html" },
  },
  {
    id: "pdm-collision", category: "school", course: "pdm", titleKey: "pdm.ex06", summaryKey: "pdm.ex06.d",
    img: "assets/img/pdm4ar/rrt.svg", alt: "RRT tree between obstacles",
    skills: ["planning", "python"], statusKey: "pdm.wip",
    detail: { team: "fact.solo", body: "proj.collision.body", cap: "proj.collision.cap", link: PDM_STATEMENT + "06-collisionchecking.html" },
  },
  {
    id: "pdm-spaceship", category: "school", course: "pdm", titleKey: "pdm.ex13", summaryKey: "pdm.ex13.d",
    img: "assets/img/pdm4ar/spaceship.svg", alt: "Spaceship trajectory between planets and asteroids",
    skills: ["trajopt", "planning", "python"], statusKey: "pdm.wip",
    detail: { team: "fact.group", body: "proj.spaceship.body", cap: "proj.spaceship.cap", link: PDM_STATEMENT + "13-robust_spaceship_docking.html" },
  },
  {
    id: "pdm-multiagent", category: "school", course: "pdm", titleKey: "pdm.ex14", summaryKey: "pdm.ex14.d",
    img: "assets/img/pdm4ar/multiagent.svg", alt: "Robots collecting goals in a warehouse",
    skills: ["multi-agent", "planning", "python"], statusKey: "pdm.wip",
    detail: { team: "fact.group", body: "proj.multiagent.body", cap: "proj.multiagent.cap", link: PDM_STATEMENT + "14-multiagent_collection.html" },
  },

  // ---------- ETH: Probabilistic Artificial Intelligence ----------
  {
    id: "pai-gp", category: "school", course: "pai", titleKey: "proj.gp.title", summaryKey: "proj.gp.summary",
    img: "assets/img/pai/gp.svg", alt: "Gaussian process with its uncertainty band",
    skills: ["gp", "python"],
    detail: { team: "vac.team", heading: "proj.h.approach", body: "proj.gp.body", cap: "pai.cap.gp", closed: true },
  },
  {
    id: "pai-swag", category: "school", course: "pai", titleKey: "proj.swag.title", summaryKey: "proj.swag.summary",
    img: "assets/img/pai/swag.svg", alt: "Class probabilities against a confidence threshold",
    skills: ["bayes-dl", "pytorch", "python"],
    detail: { team: "fact.solo", heading: "proj.h.approach", body: "proj.swag.body", cap: "proj.swag.cap", closed: true },
  },
  {
    id: "pai-bo", category: "school", course: "pai", titleKey: "proj.bo.title", summaryKey: "proj.bo.summary",
    img: "assets/img/pai/safe-bo.svg", alt: "Objective sampled inside a safe region",
    skills: ["bo", "gp", "python"], statusKey: "pdm.wip",
    detail: { team: "fact.solo", body: "proj.bo.body", cap: "proj.bo.cap", closed: true },
  },

  // ---------- ETH: Robotic Materials ----------
  {
    id: "robotic-materials", category: "school", course: "rm", href: "robotic-materials.html",
    titleKey: "rm.title", summaryKey: "rm.summary",
    img: "assets/img/robotic-materials/course.svg", alt: "Schematic of the colon phantom course",
    skills: ["soft-robotics", "sensors"], statusKey: "pdm.wip",
  },

  // ---------- EPFL ----------
  {
    id: "flyforce", category: "school", grade: "5.25/6", course: "cdm2", href: "flyforce.html", title: "FlyForce",
    summaryKey: "ff.summary",
    img: "assets/img/flyforce/cover.jpg", alt: "CAD model of the FlyForce flexure force sensor",
    skills: ["flexures", "balancing", "fem", "machining", "sensors"],
  },
  {
    id: "vacuum-robot", category: "school", course: "mcu", href: "vacuum-robot.html",
    grade: "6/6",
    titleKey: "vac.title", summaryKey: "vac.summary",
    img: "assets/img/vacuum/cover.svg", alt: "Happy face on the robot's 8×8 LED matrix",
    skills: ["asm", "sensors", "motors", "interfaces"],
  },
  {
    id: "alarm-clock", category: "school", course: "logic", href: "fpga-alarm-clock.html",
    grade: "6/6",
    titleKey: "clock.title", summaryKey: "clock.summary",
    img: "assets/img/alarm-clock/cover.jpg", alt: "DE10-Lite FPGA board running the alarm clock",
    skills: ["digital-logic", "interfaces"],
  },
  {
    id: "winch", category: "school", course: "cm2", href: "forest-winch.html",
    grade: "6/6",
    titleKey: "winch.title", summaryKey: "winch.summary",
    img: "assets/img/winch/cover.jpg", alt: "Render of the hand-cranked forest winch",
    skills: ["machine-elements"],
  },
];

// ---------- Helpers ----------

function skillLabel(skill) {
  return skill.label || t(skill.key);
}

function skillById(id) {
  return portfolioSkills.find((s) => s.id === id);
}

function projectTitle(project) {
  return project.titleKey ? t(project.titleKey) : project.title;
}

function projectHref(project) {
  return project.href || `project.html?p=${encodeURIComponent(project.id)}`;
}

function projectsUsing(skillId) {
  return portfolioProjects.filter((project) => project.skills.includes(skillId));
}

function projectsOfCourse(courseId) {
  return portfolioProjects.filter((p) => p.course === courseId);
}

function projectCount(n) {
  return n === 1 ? t("skills.count.one") : t("skills.count.many").replace("{n}", n);
}

function courseMeta(course) {
  return [t(course.schoolKey), course.termKey && t(course.termKey)].filter(Boolean).join(" · ");
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// ---------- Home: skill index ----------

function buildSkillIndex(container, currentId) {
  container.replaceChildren();
  skillGroups.forEach((group) => {
    const skills = portfolioSkills.filter(
      (skill) => skill.group === group.id && projectsUsing(skill.id).length > 0
    );
    if (!skills.length) return;

    const section = el("section", "skill-group");
    section.append(el("h3", "", t(group.key)));
    const list = el("ul");
    skills.forEach((skill) => {
      const link = el("a");
      link.href = `skills.html?s=${encodeURIComponent(skill.id)}`;
      if (skill.id === currentId) link.setAttribute("aria-current", "page");
      link.append(
        el("span", "skill-name", skillLabel(skill)),
        el("span", "skill-leader"),
        el("span", "skill-count", projectCount(projectsUsing(skill.id).length))
      );
      const item = el("li");
      item.append(link);
      list.append(item);
    });
    section.append(list);
    container.append(section);
  });
}

// ---------- Compact project card (school.html, skills.html) ----------

function buildMiniCard(project, { showContext = false, showYear = false } = {}) {
  const card = el("a", "mini-card");
  card.href = projectHref(project);

  const media = el("span", "mini-card-media");
  const img = el("img");
  img.src = project.img;
  img.alt = "";
  img.loading = "lazy";
  media.append(img);
  if (project.statusKey) media.append(el("span", "mini-card-status", t(project.statusKey)));
  if (project.grade) {
    media.append(el("span", "mini-card-grade", t("card.grade").replace("{g}", project.grade)));
  } else if (project.category === "school" && !project.hideGrade) {
    media.append(el("span", "mini-card-grade is-ungraded", t("card.ungraded")));
  }

  const body = el("span", "mini-card-body");
  if (showContext) {
    const course = portfolioCourses.find((c) => c.id === project.course);
    body.append(
      el(
        "span",
        "mini-card-context",
        course ? t(course.key) : `${t("case.kicker")} · ${t(project.yearKey)}`
      )
    );
  } else if (showYear && project.yearKey) {
    body.append(el("span", "mini-card-context", t(project.yearKey)));
  }
  body.append(el("span", "mini-card-title", projectTitle(project)));

  const tags = el("span", "mini-card-tags");
  project.skills.forEach((id) => {
    const skill = skillById(id);
    if (skill) tags.append(el("span", "", skillLabel(skill)));
  });
  body.append(tags);

  card.append(media, body);
  return card;
}

// ---------- school.html: cards grouped by course ----------

function buildCourses(container) {
  container.replaceChildren();
  const courses = portfolioCourses.filter((c) => projectsOfCourse(c.id).length);

  const summary = document.querySelector("#school-summary");
  if (summary) {
    summary.textContent = t("school.summary")
      .replace("{projects}", portfolioProjects.filter((p) => p.category === "school").length)
      .replace("{courses}", courses.length);
  }

  courses.forEach((course) => {
    const projects = projectsOfCourse(course.id);
    const block = el("section", `course-block span-${Math.min(projects.length, 4)}`);
    const head = el("header", "course-head");
    head.append(el("h2", "", t(course.key)), el("p", "course-meta", courseMeta(course)));
    block.append(head, ...projects.map((p) => buildMiniCard(p)));
    container.append(block);
  });

  markCourseSeparators(container);
}

// Thin vertical rule in the gap between two courses that share a row.
function markCourseSeparators(container) {
  const blocks = [...container.children];
  const left = container.getBoundingClientRect().left;
  blocks.forEach((block) => {
    block.classList.toggle("has-rule", block.getBoundingClientRect().left - left > 4);
  });
}

// ---------- project.html: generic page for projects without their own page ----------

function buildProjectPage(root) {
  const id = new URLSearchParams(location.search).get("p");
  const project = portfolioProjects.find((p) => p.id === id && p.detail);
  const missing = root.querySelector("#project-missing");
  const article = root.querySelector("#project-article");
  if (!project) {
    missing.hidden = false;
    article.hidden = true;
    missing.querySelector("a").textContent = t("proj.notfound");
    return;
  }
  missing.hidden = true;
  article.hidden = false;

  const d = project.detail;
  const course = portfolioCourses.find((c) => c.id === project.course);
  const title = projectTitle(project);
  document.title = `Yann Royer — ${title}`;

  root.querySelector("#project-title").textContent = title;
  root.querySelector("#project-summary").textContent = t(project.summaryKey);

  const tags = root.querySelector("#project-tags");
  tags.replaceChildren(
    ...project.skills.map((sid) => {
      const li = el("li");
      const a = el("a", "", skillLabel(skillById(sid)));
      a.href = `skills.html?s=${encodeURIComponent(sid)}`;
      li.append(a);
      return li;
    })
  );

  const facts = [
    ["fact.course", t(course.key)],
    ["fact.school", t(course.schoolKey)],
    course.termKey && ["fact.term", t(course.termKey)],
    ["fact.team", t(d.team)],
    ["fact.status", t(project.statusKey || "pdm.done")],
    ["fact.grade", project.grade ? project.grade.replace("/", " / ") : t("card.ungraded")],
    d.closed && ["fact.code", t("fact.code.closed")],
  ].filter(Boolean);
  root.querySelector("#project-facts").replaceChildren(
    ...facts.map(([k, v]) => {
      const row = el("div");
      row.append(el("dt", "", t(k)), el("dd", "", v));
      return row;
    })
  );

  const img = root.querySelector("#project-img");
  img.src = project.img;
  img.alt = project.alt;
  root.querySelector("#project-cap").textContent = t(d.cap);

  root.querySelector("#project-h").textContent = t(d.heading || "proj.h.task");
  root.querySelector("#project-body").textContent = t(d.body);

  const link = root.querySelector("#project-link");
  link.hidden = !d.link;
  if (d.link) {
    link.href = d.link;
    link.textContent = t("proj.statement");
  }

  root.querySelector("[data-case-nav]").dataset.caseNav = project.id;
}

// ---------- Previous / next links on school project pages ----------

function buildCaseNav(nav) {
  const order = portfolioCourses.flatMap((c) => projectsOfCourse(c.id));
  const i = order.findIndex((p) => p.id === nav.dataset.caseNav);
  if (i < 0) return;
  nav.replaceChildren();
  [
    [order[i - 1], "is-prev", "case.prev"],
    [order[i + 1], "is-next", "case.next"],
  ].forEach(([project, cls, labelKey]) => {
    if (!project) return;
    const link = el("a", `case-nav-link ${cls}`);
    link.href = projectHref(project);
    link.append(el("span", "case-nav-label", t(labelKey)), el("span", "case-nav-name", projectTitle(project)));
    nav.append(link);
  });
}

// ---------- skills.html ----------

function buildSkillPage(page) {
  const id = new URLSearchParams(location.search).get("s");
  const skill = skillById(id);
  const title = page.querySelector("#skill-title");
  const groupLabel = page.querySelector("#skill-group");
  const lead = page.querySelector("#skill-lead");
  const grid = page.querySelector("#skill-projects");
  const gridSection = page.querySelector("#skill-projects-section");
  const indexTitle = page.querySelector("#skill-index-title");

  if (skill) {
    const label = skillLabel(skill);
    const projects = projectsUsing(skill.id);
    groupLabel.textContent = t(skillGroups.find((g) => g.id === skill.group).key);
    groupLabel.hidden = false;
    title.textContent = label;
    lead.textContent = t("skills.page.lead")
      .replace("{count}", projectCount(projects.length))
      .replace("{skill}", label);
    grid.replaceChildren(...projects.map((p) => buildMiniCard(p, { showContext: true })));
    gridSection.hidden = false;
    indexTitle.textContent = t("skills.page.other");
    document.title = `Yann Royer — ${label}`;
  } else {
    groupLabel.hidden = true;
    title.textContent = t("skills.page.title");
    lead.textContent = t("skills.lead");
    gridSection.hidden = true;
    indexTitle.textContent = t("skills.page.all");
  }

  buildSkillIndex(page.querySelector("#skill-index"), skill ? skill.id : null);
}

// Called by applyLanguage() in main.js, after every language change.
function renderSkills() {
  const projectPage = document.querySelector("#project-page");
  if (projectPage) buildProjectPage(projectPage);

  document.querySelectorAll("[data-case-nav]").forEach(buildCaseNav);

  const homeIndex = document.querySelector("#skill-index-home");
  if (homeIndex) buildSkillIndex(homeIndex);

  const courses = document.querySelector("#school-courses");
  if (courses) buildCourses(courses);

  const personal = document.querySelector("#personal-projects");
  if (personal) {
    personal.replaceChildren(
      ...portfolioProjects
        .filter((p) => p.category === "personal")
        .map((p) => buildMiniCard(p, { showYear: true }))
    );
  }

  const skillPage = document.querySelector("#skill-page");
  if (skillPage) buildSkillPage(skillPage);
}

// Course rules depend on the layout, so they are recomputed when the window is resized.
let separatorTimer;
window.addEventListener("resize", () => {
  clearTimeout(separatorTimer);
  separatorTimer = setTimeout(() => {
    const courses = document.querySelector("#school-courses");
    if (courses) markCourseSeparators(courses);
  }, 100);
});
