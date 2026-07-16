import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft, Check, Copy, ExternalLink, FileText, GraduationCap, Mail, Moon, Phone, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import resumePdf from "../imports/___-2026__.pdf";
import laihuiCover from "../imports/optimized/image-2.jpg";
import qingjuCover from "../imports/optimized/image-3.jpg";
import rqamsCover from "../imports/optimized/image-4.jpg";
import rqthemeCover from "../imports/optimized/image-5.jpg";
import operationCover from "../imports/optimized/image-6.jpg";
import logoImage from "../imports/image-7.png";
import avatarImage from "../imports/optimized/image-9.jpg";
import laihui03 from "../imports/laihui-figma/03.jpg";
import laihui04 from "../imports/laihui-figma/04.jpg";
import laihui05 from "../imports/laihui-figma/05.jpg";
import laihui06 from "../imports/laihui-figma/06.jpg";
import laihui07 from "../imports/laihui-figma/07.jpg";
import laihui08 from "../imports/laihui-figma/08.jpg";
import laihui09 from "../imports/laihui-figma/09.jpg";
import laihui10 from "../imports/laihui-figma/10.jpg";
import laihui11 from "../imports/laihui-figma/11.jpg";
import laihui12 from "../imports/laihui-figma/12.jpg";
import laihui13 from "../imports/laihui-figma/13.jpg";
import laihui14 from "../imports/laihui-figma/14.jpg";
import laihui15 from "../imports/laihui-figma/15.jpg";
import laihui16 from "../imports/laihui-figma/16.jpg";
import laihui17 from "../imports/laihui-figma/17.jpg";
import laihui18 from "../imports/laihui-figma/18.jpg";
import laihui19 from "../imports/laihui-figma/19.jpg";
import laihui20 from "../imports/laihui-figma/20.jpg";
import laihui21 from "../imports/laihui-figma/21.jpg";
import laihui22 from "../imports/laihui-figma/22.jpg";
import laihui23 from "../imports/laihui-figma/23.jpg";
import laihui24 from "../imports/laihui-figma/24.jpg";
import laihui25 from "../imports/laihui-figma/25.jpg";
import laihui26 from "../imports/laihui-figma/26.jpg";
import laihui27 from "../imports/laihui-figma/27.jpg";
import laihui28 from "../imports/laihui-figma/28.jpg";

type Page = "home" | "works" | "about" | "detail";

type Metric = { value: string; label: string };
type Work = {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  role?: string;
  challenge?: string;
  process?: string[];
  metrics?: Metric[];
  tags?: string[];
  images?: string[];
  gallery?: string[];
  galleryLayout?: "stack" | "grid";
};

type Job = { time: string; company: string; role: string; summary: string; results: string[] };

const qingjuGallery = [
  new URL("../imports/qingju-figma/29.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/30.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/31.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/32.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/33.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/34.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/35.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/36.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/37.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/38.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/39.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/40.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/41.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/42.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/43.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/44.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/45.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/46.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/47.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/48.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/49.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/50.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/51.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/52.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/53.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/54.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/55.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/56.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/57.jpg", import.meta.url).href,
  new URL("../imports/qingju-figma/58.jpg", import.meta.url).href,
];

const rqamsGallery = [
  new URL("../imports/rqams-figma/59.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/60.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/61.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/62.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/63.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/64.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/65.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/66.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/67.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/68.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/69.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/70.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/71.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/72.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/73.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/74.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/75.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/76.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/77.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/78.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/79.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/80.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/81.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/82.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/83.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/84.jpg", import.meta.url).href,
  new URL("../imports/rqams-figma/85.jpg", import.meta.url).href,
];

const rqthemeGallery = [
  new URL("../imports/rqtheme-figma/86.jpg", import.meta.url).href,
  new URL("../imports/rqtheme-figma/87.jpg", import.meta.url).href,
  new URL("../imports/rqtheme-figma/88.jpg", import.meta.url).href,
  new URL("../imports/rqtheme-figma/89.jpg", import.meta.url).href,
  new URL("../imports/rqtheme-figma/90.jpg", import.meta.url).href,
  new URL("../imports/rqtheme-figma/91.jpg", import.meta.url).href,
  new URL("../imports/rqtheme-figma/92.jpg", import.meta.url).href,
];

const operationDesignImage = new URL("../imports/rqtheme-figma/93.jpg", import.meta.url).href;
const aboutShowcaseImage = new URL("../imports/rqtheme-figma/94.jpg", import.meta.url).href;

const operationGallery = [
  new URL("../imports/operation-figma/01.png", import.meta.url).href,
  new URL("../imports/operation-figma/02.png", import.meta.url).href,
  new URL("../imports/operation-figma/03.png", import.meta.url).href,
  new URL("../imports/operation-figma/04.png", import.meta.url).href,
  new URL("../imports/operation-figma/05.png", import.meta.url).href,
  new URL("../imports/operation-figma/06.png", import.meta.url).href,
  new URL("../imports/operation-figma/07.png", import.meta.url).href,
  new URL("../imports/operation-figma/08.png", import.meta.url).href,
  new URL("../imports/operation-figma/09.png", import.meta.url).href,
  new URL("../imports/operation-figma/10.png", import.meta.url).href,
  new URL("../imports/operation-figma/11.png", import.meta.url).href,
  new URL("../imports/operation-figma/12.png", import.meta.url).href,
];

const works: Work[] = [
  {
    title: "来绘 APP",
    category: "社区产品 / 增长体验",
    year: "2022–2024",
    description: "负责来绘 APP 整体用户体验规划、增长体验优化与设计团队管理，围绕注册流程、新手引导、创作体验、内容活跃与活动玩法进行全链路体验升级。",
    image: laihuiCover,
    role: "高级 UX 设计负责人 · 设计团队管理",
    challenge: "来绘是面向绘画爱好者的社区产品，上线初期面临注册流失率高、新手用户流程完成率低、DAU 增长瓶颈等问题。需要在保障创作体验的前提下，系统性提升用户留存与活跃度。",
    process: [
      "调研 4 大类用户画像，深度访谈与问卷收集 24 个核心痛点，建立需求优先级矩阵。",
      "重新梳理注册流程与新手引导路径，精简步骤、优化文案与视觉引导节点。",
      "设计春节等节点营销活动玩法，构建活动 → 参与 → 分享的增长飞轮。",
      "建立全线组件设计规范，推动研发协同，还原度达 97%。",
    ],
    metrics: [
      { value: "40%", label: "注册转化率提升" },
      { value: "98%", label: "新手流程完成率" },
      { value: "+17%", label: "春节期间 DAU 提升" },
      { value: "30%", label: "用户满意度提升" },
    ],
    tags: ["用户研究", "增长设计", "新手引导", "活动玩法", "Design System", "团队管理"],
    images: [
      laihuiCover,
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=800&fit=crop&auto=format",
    ],
    gallery: [
      laihui03,
      laihui04,
      laihui05,
      laihui06,
      laihui07,
      laihui08,
      laihui09,
      laihui10,
      laihui11,
      laihui12,
      laihui13,
      laihui14,
      laihui15,
      laihui16,
      laihui17,
      laihui18,
      laihui19,
      laihui20,
      laihui21,
      laihui22,
      laihui23,
      laihui24,
      laihui25,
      laihui26,
      laihui27,
      laihui28,
    ],
  },
  {
    title: "青桔成长体系",
    category: "用户成长体系 / 赛事方案",
    year: "2021–2022",
    description: "通过产品调研、用户研究与创意设计，定位青桔成长体系现存问题，输出面向用户目标与痛点的成长体系优化方案，并获得知群中国产品设计大赛专业组优秀方案奖。",
    image: qingjuCover,
    role: "设计组长 · 独立主导",
    challenge: "青桔单车成长体系存在任务单一、激励感知弱、用户粘性不足等问题。本项目以竞赛为契机，系统梳理骑行用户旅程与激励逻辑，提出完整的成长体系重设方案。",
    process: [
      "竞品分析：对标滴滴出行、哈啰单车等产品，梳理成长体系常见模式与差异化机会。",
      "用户研究：访谈多类型骑行用户，提炼核心动机与流失节点。",
      "方案设计：提出「骑行等级 + 任务系统 + 勋章体系 + 社交互动」四层成长框架。",
      "汇报呈现：输出完整方案文档与高保真视觉稿，获得大赛专业组优秀方案奖。",
    ],
    metrics: [
      { value: "优秀", label: "专业组奖项" },
      { value: "4层", label: "成长体系框架" },
      { value: "全链路", label: "用户旅程覆盖" },
    ],
    tags: ["用户成长", "激励体系", "竞品分析", "用户研究", "方案输出"],
    images: [
      qingjuCover,
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop&auto=format",
    ],
    gallery: qingjuGallery,
  },
  {
    title: "RQams 资产管理",
    category: "金融资管 / B 端系统",
    year: "2019–2022",
    description: "面向资产管理业务的企业级系统体验设计，覆盖多角色权限、复杂数据表格、资产配置、组合管理与业务流程协同等高密度场景。",
    image: rqamsCover,
    role: "高级 UX 设计组长 · 主设计师",
    challenge: "金融资管系统面向基金经理、风控、运营等多角色，业务流程复杂，数据密度高。需要在专业效率与操作易用性之间取得平衡，同时支持快速迭代与研发协同。",
    process: [
      "梳理招商基金、长城证券等重点客户的业务流程与角色权限矩阵。",
      "设计多角色仪表盘、复杂数据表格交互规范与组合管理模块。",
      "建立金融 B 端设计规范，统一组件库与交互标准，提升跨业务线一致性。",
      "与前端工程师紧密协作，推动设计还原与走查流程标准化。",
    ],
    metrics: [
      { value: "14个", label: "金融项目覆盖" },
      { value: "45%", label: "团队设计效率提升" },
      { value: "25%", label: "项目交付效率提升" },
      { value: "千万+", label: "客户年费规模" },
    ],
    tags: ["B端设计", "金融资管", "多角色权限", "数据可视化", "Design System", "研发协同"],
    images: [
      rqamsCover,
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&h=800&fit=crop&auto=format",
    ],
    gallery: rqamsGallery,
  },
  {
    title: "RQQUANT 量化投资",
    category: "量化交易 / 投研工具",
    year: "2019–2022",
    description: "围绕量化策略研究、回测分析、交易流程与数据可视化，构建清晰、高效、可扩展的专业投研工具体验。",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1100&h=900&fit=crop&auto=format",
    role: "主设计师 · B端体验设计",
    challenge: "量化投资工具面向专业量化研究员，用户对信息密度和操作效率要求极高，需要在不降低专业性的前提下，优化工作流程与数据呈现方式。",
    process: [
      "深入访谈量化研究员与交易员，梳理策略研究 → 回测 → 上线的完整工作流。",
      "设计策略编辑器、回测报告、持仓分析等核心模块的交互框架。",
      "优化图表组件与数据表格，支持多维度对比与快速筛选。",
      "制定专业工具的设计语言规范，统一视觉层级与信息密度。",
    ],
    metrics: [
      { value: "全流程", label: "策略研究链路覆盖" },
      { value: "高密度", label: "专业数据场景" },
      { value: "多维度", label: "回测分析可视化" },
    ],
    tags: ["量化工具", "数据可视化", "B端设计", "投研流程", "图表设计"],
    images: [
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&auto=format",
    ],
  },
  {
    title: "RQFUND 基金投研",
    category: "基金研究 / 数据产品",
    year: "2018–2022",
    description: "为基金投研场景设计信息架构、筛选分析、指标对比与研究工作台，帮助专业用户在复杂数据中快速完成判断与决策。",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1100&h=900&fit=crop&auto=format",
    role: "主设计师 · 数据产品体验",
    challenge: "基金投研产品面向机构投资者，需要在海量数据中支持快速筛选、对比与研判。用户对信息准确性和操作效率敏感，容错空间小。",
    process: [
      "梳理基金筛选、业绩归因、持仓分析、研报管理等核心场景的用户旅程。",
      "设计多维筛选器、指标对比看板与研究工作台的交互规范。",
      "优化信息层级与数据展示密度，支持用户自定义视图与收藏。",
      "与数据团队协作，确保指标定义与展示逻辑的一致性。",
    ],
    metrics: [
      { value: "多角色", label: "机构用户覆盖" },
      { value: "全面", label: "基金筛选维度" },
      { value: "高效", label: "研判决策流程" },
    ],
    tags: ["基金研究", "数据产品", "信息架构", "筛选设计", "B端设计"],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=800&fit=crop&auto=format",
    ],
  },
  {
    title: "RQbond 债券投研",
    category: "债券研究 / 金融终端",
    year: "2018–2022",
    description: "针对债券投研、行情分析、主体研究与风险判断等业务场景，优化专业金融终端的信息层级与操作路径。",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1100&h=900&fit=crop&auto=format",
    role: "主设计师 · 金融终端体验",
    challenge: "债券市场信息量庞大，用户（债券投资经理与研究员）需要在行情、主体、评级、风险等多维度之间快速切换并完成决策，传统终端交互成本高、学习曲线陡。",
    process: [
      "访谈债券研究员，梳理行情查看、主体研究、风险预警等核心工作场景。",
      "重构信息架构，减少导航层级，提升关键数据的可及性。",
      "设计行情走势图、主体画像卡片与风险指标仪表盘。",
      "优化操作路径，降低专业用户的重复操作成本。",
    ],
    metrics: [
      { value: "多场景", label: "债券研究覆盖" },
      { value: "精简", label: "导航层级优化" },
      { value: "专业", label: "金融终端体验" },
    ],
    tags: ["债券研究", "金融终端", "信息架构", "行情设计", "B端设计"],
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop&auto=format",
    ],
  },
  {
    title: "RQTHEME 组件库",
    category: "Design System / 组件资产",
    year: "2020–2022",
    description: "沉淀金融 B 端产品设计规范与组件资产，统一视觉语言、交互标准与研发协作方式，提升多业务线设计与交付效率。",
    image: rqthemeCover,
    role: "Design System 主导者 · 设计组长",
    challenge: "公司旗下 14 个金融产品各自维护设计风格，导致视觉不一致、组件重复建设、研发协同成本高。需要建立统一的设计系统，覆盖 Web 与移动端双端。",
    process: [
      "梳理现有产品设计模式，提炼通用组件与特殊场景组件，建立分类体系。",
      "制定设计 Token 规范（色彩、字体、间距、圆角、阴影），统一视觉语言。",
      "在 Figma 中构建可复用组件库，支持 Auto Layout 与变体系统。",
      "与前端团队协作，输出组件文档与使用规范，推动设计-研发协同提效。",
    ],
    metrics: [
      { value: "Web 90%", label: "组件覆盖率" },
      { value: "移动 80%", label: "移动端覆盖率" },
      { value: "45%", label: "团队效率提升" },
      { value: "统一", label: "14个产品视觉语言" },
    ],
    tags: ["Design System", "组件库", "Token规范", "Figma", "研发协同", "双端设计"],
    images: [
      rqthemeCover,
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop&auto=format",
    ],
    gallery: rqthemeGallery,
  },
  {
    title: "运营设计",
    category: "品牌传播 / 活动视觉",
    year: "2015–2024",
    description: "覆盖品牌官网、课程宣传、营销活动、节日运营与线上传播物料设计，兼顾视觉表现、传播效率与商业转化目标。",
    image: operationCover,
    role: "视觉设计师 / 高级设计负责人",
    challenge: "跨越多个公司与业务阶段，需要根据不同品牌调性与传播目标快速产出高质量物料，同时兼顾视觉一致性与创意表达。",
    process: [
      "品牌官网：主导视觉升级，统一品牌调性，优化信息架构与转化路径。",
      "活动运营：设计节日主题活动页面与 Banner，驱动用户参与与传播。",
      "课程宣传：输出课程详情页、社交媒体物料与推广素材。",
      "营销物料：设计线上广告、EDM 与品牌传播相关视觉资产。",
    ],
    metrics: [
      { value: "9年+", label: "设计实战积累" },
      { value: "多行业", label: "覆盖互联网/金融/教育" },
      { value: "全链路", label: "品牌传播设计" },
    ],
    tags: ["运营设计", "品牌视觉", "活动设计", "营销物料", "官网设计"],
    images: [
      operationCover,
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&auto=format",
    ],
    gallery: operationGallery,
    galleryLayout: "grid",
  },
];

const rqthemePreviewWork = works.find((work) => work.title.includes("RQTHEME"));
const previewWorks = [works[0], works[1], works[2], rqthemePreviewWork].filter(Boolean) as Work[];

const strengths = [
  "8 年 UX/UI 全链路设计实战经验，4 年专业设计团队管理经验",
  "长期深耕 B 端企业服务、金融资管、销售 CRM、互联网社区等产品领域",
  "具备 0-1 产品体验搭建、复杂业务流程设计与 Design System 建设经验",
  "熟悉企业级产品信息架构、多角色权限逻辑与高密度数据场景设计",
  "关注 AI 对话、智能推荐与场景化智能功能在实际业务中的落地",
];

const abilities = [
  ["AI 智能体验设计", "熟悉 AI 对话助手、智能推荐等能力设计，推动智能能力与业务流程深度融合。"],
  ["复杂业务体验设计", "擅长多角色、多流程、高密度数据场景，深耕 CRM、金融资管、大数据后台等企业级产品。"],
  ["Design System 搭建", "从视觉规范、交互标准、组件资产到双端统一与研发协同，具备完整体系搭建与落地经验。"],
  ["增长与商业化设计", "通过数据分析与用户研究优化转化路径，提升拉新、留存、活跃与付费等核心指标。"],
  ["团队管理与协同", "4 年团队管理经验，擅长团队搭建、绩效评级、评审规范、能力培养与跨部门协同。"],
];

const experience: Job[] = [
  { time: "2025.04 — 至今", company: "武汉亿达信息技术有限公司 · 顺丰项目", role: "高级 UX 设计师", summary: "负责顺丰 CRM 系统与销售侧 AI 产品 UX 设计，覆盖线索管理、客户管理、商机跟进、合同审批、回款对账、数据报表等核心业务场景。", results: ["重构销售全链路业务流程与多方协同逻辑，整体销售办公跟进效率提升 25%", "主导搭建 Web / App 双端 Design System，Web 组件覆盖率 90%，移动端组件覆盖率 80%", "优化数据可视化看板与销售漏斗页面，内部体验评分由 7.27 提升至 8.57"] },
  { time: "2022.09 — 2024.09", company: "武汉绘一科技有限公司", role: "高级 UX 设计负责人", summary: "负责「来绘 App」整体用户体验规划、增长体验优化与设计团队管理，推动注册流程、新手引导、活动玩法和组件体系建设。", results: ["调研 4 大类用户画像，挖掘 24 个核心痛点并推动迭代，用户满意度提升 30%", "注册转化率提升 40%，新手流程完成率由 56% 提升至 98%", "春节营销活动带动 DAU 上涨 17%，整体付费转化率提升 3%", "全线项目设计落地还原度达 97%"] },
  { time: "2017.08 — 2022.07", company: "深圳米筐科技有限公司", role: "高级 UX 设计组长", summary: "主导金融资管与企业服务方向 B 端产品体验设计，服务招商基金、长城证券、南方基金、新华社等重点项目。", results: ["建立产品标准化设计体系，团队设计效率提升 45%", "优化产研协同流程，项目整体交付效率提升 25%", "负责公司 4 大业务线、14 个金融项目全流程体验设计", "产品重构后实现标准化盈利，客户购买年费超千万"] },
  { time: "2016.05 — 2017.05", company: "深圳第九课堂科技有限公司", role: "视觉设计师", summary: "负责品牌官网视觉升级、课程宣传物料与活动页面设计，优化品牌线上视觉体验与传播效果。", results: [] },
  { time: "2015.11 — 2016.03", company: "深圳市冰冰纸业有限公司", role: "视觉设计师", summary: "负责企业品牌宣传、网页页面与市场推广相关视觉设计工作。", results: [] },
];

function WorkCard({ work, onClick }: { work: Work; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-[2rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl text-left transition duration-300 hover:-translate-y-1 hover:border-white/80 dark:border-white/25 hover:shadow-[0_24px_70px_rgba(31,41,55,.14)]"
    >
      <div className="relative aspect-[1.6/1] overflow-hidden border-b border-white/55 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,255,.14),transparent_55%)]">
        <img
          src={work.image}
          alt={`${work.title}封面`}
          loading="lazy"
          decoding="async"
          className="relative h-full w-full object-cover opacity-95"
        />
      </div>
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{work.category}</p>
        <div className="mt-3 flex items-center justify-between gap-4">
          <h3 className="text-2xl leading-tight md:text-3xl">{work.title}</h3>
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-[0_12px_28px_rgba(15,23,42,.16)] transition group-hover:translate-x-1" aria-label="查看作品详情">
            <ArrowRight size={17} />
          </span>
        </div>
      </div>
    </button>
  );
}

function WorkDetail({ work, onBack }: { work: Work; onBack: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="space-y-10"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="group inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-white/15 bg-white/45 dark:bg-slate-950/45 px-4 py-2 text-sm text-slate-500 dark:text-slate-400 backdrop-blur-xl transition hover:text-slate-950 dark:hover:text-slate-50"
      >
        <ArrowLeft size={15} className="transition group-hover:-translate-x-0.5" />
        返回作品列表
      </button>

      {/* Hero */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl shadow-[0_30px_90px_rgba(31,41,55,.14)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,255,.18),transparent_50%)]" />
        <img
          src={work.image}
          alt={work.title}
          loading="eager"
          decoding="async"
          className="relative w-full object-contain"
          style={{ maxHeight: "520px" }}
        />
      </div>

      {/* Title & meta */}
      <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#5856d6]">{work.category}</p>
          <h1 className="mt-3 text-4xl leading-none sm:text-5xl md:text-6xl">{work.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 md:text-lg">{work.description}</p>
        </div>
        <div className="flex flex-wrap gap-3 self-start lg:flex-col lg:items-end">
          <div className="rounded-full border border-white/60 dark:border-white/15 bg-white/45 dark:bg-slate-950/45 px-4 py-2 text-sm backdrop-blur-xl">
            <span className="text-slate-500 dark:text-slate-400">时间：</span><span>{work.year}</span>
          </div>
          {work.role && (
            <div className="rounded-full border border-white/60 dark:border-white/15 bg-white/45 dark:bg-slate-950/45 px-4 py-2 text-sm backdrop-blur-xl">
              <span className="text-slate-500 dark:text-slate-400">角色：</span><span>{work.role}</span>
            </div>
          )}
        </div>
      </div>

      {/* Metrics */}
      {work.metrics && work.metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {work.metrics.map((m) => (
            <div key={m.label} className="rounded-[1.5rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl p-5 text-center">
              <p className="text-3xl font-semibold leading-none text-slate-950 dark:text-slate-50 md:text-4xl">{m.value}</p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Challenge & Process */}
      <div className="grid gap-6 lg:grid-cols-2">
        {work.challenge && (
          <div className="rounded-[2rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">项目背景</p>
            <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{work.challenge}</p>
          </div>
        )}
        {work.process && work.process.length > 0 && (
          <div className="rounded-[2rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">设计过程</p>
            <ol className="mt-4 space-y-4">
              {work.process.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-slate-950 text-[10px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {work.gallery && work.gallery.length > 0 && (
        <section
          className={
            work.galleryLayout === "grid"
              ? "grid grid-cols-2 gap-4 [content-visibility:auto] [contain-intrinsic-size:1200px] sm:grid-cols-3 lg:grid-cols-4"
              : "flex flex-col items-center gap-0 [content-visibility:auto] [contain-intrinsic-size:1200px]"
          }
          aria-label={`${work.title} 作品展示`}
        >
          {work.gallery.map((image, index) => (
            <img
              key={`${work.title}-gallery-${index + 1}`}
              src={image}
              alt={`${work.title} 作品展示图 ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className={
                work.galleryLayout === "grid"
                  ? "h-full w-full object-contain"
                  : "w-full max-w-5xl bg-white/30 object-contain dark:bg-white/5"
              }
              style={{ aspectRatio: work.galleryLayout === "grid" ? "9 / 16" : "auto 16 / 9" }}
            />
          ))}
        </section>
      )}

      {/* Tags */}
      {work.tags && work.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/60 dark:border-white/15 bg-white/45 dark:bg-slate-950/45 px-4 py-1.5 text-xs text-slate-600 dark:text-slate-300 backdrop-blur-xl">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Nav between works */}
      <div className="flex flex-col gap-4 border-t border-white/40 dark:border-white/10 pt-8 sm:flex-row sm:justify-between">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-white/15 bg-white/45 dark:bg-slate-950/45 px-5 py-3 text-sm text-slate-500 dark:text-slate-400 backdrop-blur-xl transition hover:text-slate-950 dark:hover:text-slate-50"
        >
          <ArrowLeft size={15} className="transition group-hover:-translate-x-0.5" />
          返回作品列表
        </button>
      </div>
    </motion.article>
  );
}

function ResumeIntro({ copiedField, onCopy }: { copiedField: string | null; onCopy: (field: string, value: string) => void }) {
  return (
    <div className="w-full rounded-[2rem] border border-white/55 bg-white/55 p-6 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/55 md:p-8 lg:p-10">
      <div className="mt-[30px] grid gap-6 md:grid-cols-[minmax(0,1fr)_clamp(11rem,24vw,18.75rem)] md:items-start lg:gap-10">
        <div className="min-w-0 flex-1">
          <h2 className="text-4xl leading-none sm:text-5xl">余章磊</h2>
          <p className="mt-3 text-xl text-slate-950 dark:text-slate-50">高级体验交互设计师</p>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">双端体验设计｜Design System｜团队管理｜AI 产品体验</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">8 年 UX/UI 全链路设计经验与 4 年设计团队管理经验，长期深耕 B 端企业服务、金融资管、销售 CRM、互联网社区与 AI 产品体验。 用系统化体验设计，连接复杂业务、AI 能力与商业增长。</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/45 px-3 py-1.5 backdrop-blur-xl dark:border-white/15 dark:bg-slate-950/45"><GraduationCap size={15} className="shrink-0 text-slate-500 dark:text-slate-400" aria-hidden="true" /><span>武汉纺织大学 · 艺术设计 · 本科</span></div>
            <div className="inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/45 py-1.5 pl-3 pr-1.5 backdrop-blur-xl dark:border-white/15 dark:bg-slate-950/45">
              <Phone size={15} className="shrink-0 text-slate-500 dark:text-slate-400" aria-hidden="true" /><span>15337231314</span>
              <button type="button" onClick={() => onCopy("微信", "15337231314")} className="ml-1 inline-flex size-6 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/70 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-50" aria-label="复制微信号">
                {copiedField === "微信" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full border border-white/60 bg-white/45 py-1.5 pl-3 pr-1.5 backdrop-blur-xl dark:border-white/15 dark:bg-slate-950/45">
              <Mail size={15} className="shrink-0 text-slate-500 dark:text-slate-400" aria-hidden="true" /><span>yuzhanglei_final@163.com</span>
              <button type="button" onClick={() => onCopy("邮箱", "yuzhanglei_final@163.com")} className="ml-1 inline-flex size-6 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/70 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-50" aria-label="复制邮箱">
                {copiedField === "邮箱" ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={avatarImage} alt="余章磊" loading="eager" decoding="async" className="w-full rounded-[1.5rem] object-contain" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedWork, setSelectedWork] = useState<Work>(works[0]);
  const [cursorHover, setCursorHover] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const nav = [["home", "首页"], ["works", "作品"], ["about", "关于我"]] as const;

  function updateCursorPosition(x: number, y: number) {
    mouseRef.current = { x, y };
    if (rafRef.current !== null) return;

    rafRef.current = window.requestAnimationFrame(() => {
      const { x, y } = mouseRef.current;
      const transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      if (glowRef.current) glowRef.current.style.transform = transform;
      if (cursorRef.current) cursorRef.current.style.transform = transform;
      rafRef.current = null;
    });
  }

  useEffect(() => {
    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[role=button]")) setCursorHover(true);
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const target = t.closest("a,button,[role=button]");
      const nextTarget = e.relatedTarget instanceof HTMLElement
        ? e.relatedTarget.closest("a,button,[role=button]")
        : null;
      if (target && target !== nextTarget) setCursorHover(false);
    };
    document.addEventListener("pointerover", onEnter);
    document.addEventListener("pointerout", onLeave);
    return () => {
      document.removeEventListener("pointerover", onEnter);
      document.removeEventListener("pointerout", onLeave);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function openPage(next: Page) {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openDetail(work: Work) {
    setSelectedWork(work);
    setPage("detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToWorks() {
    setPage("works");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function copyContact(field: string, value: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = value;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        const copied = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (!copied) throw new Error("Copy command failed");
      }
      setCopiedField(field);
      window.setTimeout(() => setCopiedField(null), 1800);
    } catch {
      setCopiedField(null);
    }
  }

  return (
    <main
      onMouseMove={(e) => updateCursorPosition(e.clientX, e.clientY)}
      className={`min-h-screen cursor-none overflow-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground ${isDark ? "dark" : ""}`}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(120,119,255,.32),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(0,199,190,.22),transparent_28%),radial-gradient(circle_at_50%_94%,rgba(255,149,0,.14),transparent_34%),linear-gradient(180deg,#f7f8ff_0%,#eef4ff_45%,#f8fbff_100%)] dark:bg-[radial-gradient(circle_at_18%_8%,rgba(120,119,255,.34),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(0,199,190,.16),transparent_28%),radial-gradient(circle_at_50%_94%,rgba(175,82,222,.16),transparent_34%),linear-gradient(180deg,#090812_0%,#101022_50%,#0b0b16_100%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-60 dark:opacity-30 [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] dark:[background-image:linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.10)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-20 h-[160px] w-[160px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.14),rgba(88,86,214,.10)_38%,rgba(0,199,190,.07)_58%,transparent_76%)] blur-2xl will-change-transform dark:bg-[radial-gradient(circle,rgba(255,255,255,.12),rgba(168,163,255,.11)_38%,rgba(94,234,212,.07)_58%,transparent_76%)]"
      />
      {/* Custom iOS-style cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full border border-white/90 bg-white/10 backdrop-blur-md transition-[width,height,background,opacity,box-shadow,border-color] duration-200 ease-out will-change-transform"
        style={{
          width: cursorHover ? 38 : 26,
          height: cursorHover ? 38 : 26,
          opacity: cursorHover ? 0.86 : 0.78,
          background: cursorHover
            ? "radial-gradient(circle, rgba(255,255,255,.18), rgba(255,255,255,.07) 48%, rgba(255,255,255,.02) 72%)"
            : "rgba(255,255,255,.08)",
          borderColor: cursorHover ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.88)",
          boxShadow: cursorHover
            ? "0 0 16px rgba(255,255,255,.16), inset 0 0 14px rgba(255,255,255,.10)"
            : "0 0 14px rgba(255,255,255,.18), inset 0 0 12px rgba(255,255,255,.12)",
        }}
      />

      {copiedField && (
        <div role="status" className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-full border border-white/60 bg-slate-950 px-4 py-2 text-sm text-white shadow-[0_18px_45px_rgba(15,23,42,.22)] backdrop-blur-xl dark:border-white/15 dark:bg-white dark:text-slate-950">
          {copiedField}已复制
        </div>
      )}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/55 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 shadow-[0_12px_40px_rgba(31,41,55,.08)] backdrop-blur-2xl">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <button onClick={() => openPage("home")} className="flex items-center gap-3 text-left">
            <span className="flex h-10 w-auto items-center justify-center">
              <img src={logoImage} alt="YUZHANGLEI DESIGN logo" loading="eager" decoding="async" className="h-9 w-auto object-contain" />
            </span>
            <span className="block text-xl font-semibold leading-none tracking-wide">YUZHANGLEI DESIGN</span>
          </button>
          <div className="flex w-full items-center justify-end gap-4 sm:w-auto">
            <nav className="flex flex-1 items-center justify-between gap-1 rounded-full border border-white/55 bg-white/45 p-1 shadow-[0_18px_50px_rgba(31,41,55,.10)] sm:flex-none dark:border-white/10 dark:bg-slate-950/45">
              {nav.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => openPage(key)}
                  className={`flex-1 rounded-full px-3 py-2 text-sm transition sm:flex-none md:px-5 ${
                    page === key || (page === "detail" && key === "works")
                      ? "bg-white text-slate-950 shadow-[0_12px_40px_rgba(0,0,0,.12)] dark:bg-white dark:text-slate-950"
                      : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setIsDark((value) => !value)}
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/55 text-slate-700 shadow-[0_12px_28px_rgba(31,41,55,.10)] backdrop-blur-xl transition hover:scale-105 dark:border-white/15 dark:bg-slate-950/55 dark:text-slate-200"
              aria-label={isDark ? "切换为浅色模式" : "切换为深色模式"}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-32 sm:px-5 sm:pt-28 md:px-8 md:pb-16 md:pt-32">
        <AnimatePresence mode="wait">
          {page === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-14 md:space-y-20"
            >
              <section className="flex min-h-[360px] items-end lg:min-h-[560px]">
                <ResumeIntro copiedField={copiedField} onCopy={copyContact} />
              </section>

              <section>
                <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl">作品预览</h2>
                  </div>
                  <button onClick={() => openPage("works")} className="inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-white/15 bg-white/45 dark:bg-slate-950/45 px-4 py-2 text-sm text-slate-500 dark:text-slate-400 backdrop-blur-xl transition hover:bg-white/70 dark:hover:bg-white/10 hover:text-slate-950 dark:hover:text-slate-50 md:flex">
                    查看全部作品 <ArrowRight size={15} />
                  </button>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {previewWorks.map((work) => (
                    <WorkCard key={work.title} work={work} onClick={() => openDetail(work)} />
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {page === "works" && (
            <motion.section
              key="works"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h1 className="text-4xl leading-none sm:text-5xl md:text-6xl">作品</h1>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 md:text-lg md:leading-8">
                    这里汇总展示我的代表项目，包含社区产品、用户成长体系、金融投研、Design System 与运营设计。
                  </p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {works.map((work) => (
                  <WorkCard key={work.title} work={work} onClick={() => openDetail(work)} />
                ))}
              </div>
            </motion.section>
          )}

          {page === "detail" && (
            <motion.div
              key={`detail-${selectedWork.title}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <WorkDetail work={selectedWork} onBack={backToWorks} />
            </motion.div>
          )}

          {page === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <section className="space-y-6">                <div className="space-y-6">
                  <div className="rounded-[1.5rem] border border-white/60 dark:border-white/15 bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl p-6 text-slate-800 dark:text-slate-200 shadow-[0_24px_70px_rgba(31,41,55,.10)] md:p-8">
                    <p className="text-2xl">个人优势</p>
                    <div className="mt-5 grid gap-[16px]">
                      {strengths.map((item) => (
                        <div key={item} className="flex gap-3 text-base leading-7">
                          <span className="mt-2 size-2 shrink-0 rounded-full bg-[#5856d6]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {abilities.map(([title, text]) => (
                      <article key={title} className="rounded-[2rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl p-5 transition hover:border-white/80 dark:border-white/25 hover:shadow-[0_0_32px_rgba(139,92,246,.16)]">
                        <h2 className="text-2xl">{title}</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-[2rem] border border-white/55 bg-white/45 shadow-[0_24px_70px_rgba(31,41,55,.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/45">
                <img
                  src={aboutShowcaseImage}
                  alt="关于我作品展示"
                  loading="lazy"
                  decoding="async"
                  className="w-full object-contain"
                  style={{ aspectRatio: "auto 16 / 9" }}
                />
              </section>

              <section>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">工作经历</p>
                <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl">从复杂业务到增长体验</h2>
                <div className="mt-6 space-y-4">
                  {experience.map((job) => (
                    <article key={`${job.company}-${job.time}`} className="grid gap-5 rounded-[2rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl p-5 md:grid-cols-[210px_minmax(0,1fr)] md:p-7">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#5856d6]">{job.time}</p>
                        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">{job.company}</p>
                      </div>
                      <div>
                        <h3 className="text-2xl leading-tight">{job.role}</h3>
                        <p className="mt-3 leading-7 text-slate-500 dark:text-slate-400">{job.summary}</p>
                        {job.results.length > 0 && (
                          <ul className="mt-5 grid gap-2">
                            {job.results.map((result) => (
                              <li key={result} className="flex gap-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                <span className="mt-2 h-px w-5 shrink-0 bg-primary" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl/60 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">专业技能</p>
                  <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">Figma、MasterGo、Protopie、AE、Photoshop、Illustrator；掌握 HTML / CSS 基础，熟悉设计走查、研发适配、标注交付与全流程协同。</p>
                </div>
                <div className="rounded-[2rem] border border-white/55 dark:border-white/10 bg-white/55 dark:bg-slate-950/55 backdrop-blur-2xl/60 p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">荣誉奖项</p>
                  <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">知群中国产品设计大赛 · 青桔单车用户成长体系大赛 · 专业组优秀方案奖。担任「青桔成长体系设计优化方案」设计组长。</p>
                </div>
              </section>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
