const stages = [
  {name:'职业规划/学习方法',kind:'基础',topics:['认识程序员的工作与职业路径','梳理 Python 技术体系','建立学习计划和笔记习惯'],practice:'写下目标岗位、每周可投入时间和第一份学习计划。'},
  {name:'大语言模型基础与工程化实践',kind:'基础',topics:['使用 Ollama 做本地聊天机器人','Python 入门、函数、面向对象与异常','从基础编程走向大模型应用'],practice:'建立一个可配置模型、记录输入输出的命令行聊天程序。'},
  {name:'AI智能体Web系统构建实战',kind:'实战',topics:['MySQL 数据库基础','FastAPI 路由、业务分层与项目结构','跨域资源共享及接口调试'],practice:'实现一个有健康检查、输入校验和浏览器界面的 FastAPI 服务。'},
  {name:'Agent项目启蒙',kind:'实战',topics:['会议资料如何进入系统','语音转写与文字稿存储','摘要、决定、待办与风险的结构化提取'],practice:'运行“第二大脑”智能会议系统，并用一段会议文字稿验证分析结果。',project:'../second-brain-meeting/README.md'},
  {name:'低代码Agent平台实战',kind:'实战',topics:['可视化工作流的节点与连线','工具调用和外部服务集成','调试、发布与版本管理'],practice:'绘制一条“用户提问→检索→回答”的工作流，并记录失败分支。'},
  {name:'大模型核心原理与提示词工程',kind:'原理',topics:['模型训练与推理的基本过程','上下文窗口和生成参数','提示词结构、示例与评估'],practice:'为同一任务设计三种提示词，比较输出质量和稳定性。'},
  {name:'企业级RAG系统架构与实现',kind:'系统',topics:['文档切分与向量化','检索、重排与引用来源','知识库更新和效果评估'],practice:'为一组本地文档建立可追溯来源的问答流程。'},
  {name:'【企业级项目】企业级RAG问答系统',kind:'项目',topics:['文档管理与权限边界','问答链路和引用证据','检索质量与响应质量测试'],practice:'实现上传文档、提出问题、返回答案和证据链接的最小闭环。'},
  {name:'AI Agent智能体与多模态应用',kind:'系统',topics:['Agent 理论与工具系统','Agent 框架及 MCP','Agent Skills 与多步骤任务'],practice:'设计一个能根据任务调用工具、检索知识的助手。'},
  {name:'【企业级项目】百战智能运营平台',kind:'项目',topics:['运营数据接入','智能分析和任务执行','可审计的运营建议'],practice:'先确定数据来源、用户角色与一个可验收的运营场景。'},
  {name:'【企业级项目】安康智慧健康管理平台',kind:'项目',topics:['糖尿病 AI 健康助手的业务流程','健康数据记录与权限','智能建议的证据和边界'],practice:'先设计健康记录和非诊断性信息展示的最小流程。'},
  {name:'【企业级项目】LegalMind法律咨询系统',kind:'项目',topics:['法律资料检索与引用','咨询对话与事实核验','不确定性和专业复核提示'],practice:'先设计带来源引用的法律信息检索页。'},
  {name:'大模型高效微调与对齐技术',kind:'进阶',topics:['数据集构建与清洗','参数高效微调','对齐、评估与回归测试'],practice:'制定一个小数据集的质量检查清单和评估指标。'},
  {name:'大数据处理与分布式检索技术',kind:'进阶',topics:['海量数据处理流程','分布式索引与查询','吞吐、延迟和可靠性'],practice:'比较单机索引与分布式检索的适用条件。'},
  {name:'小龙虾OpenClaw',kind:'专题',topics:['多渠道数据采集与清洗','把原始资料结构化和向量化','为 RAG 知识库提供高质量数据'],practice:'梳理从网页、API、PDF 或数据库到知识库的处理流程。'},
  {name:'Hermes-Agent 自我进化的超级智能体',kind:'专题',topics:['Agent 的记忆和反馈','任务迭代与自我评估','防止错误积累的验证机制'],practice:'为一个循环执行任务定义成功、失败和停止条件。'},
  {name:'Vibe Coding实践',kind:'实战',topics:['Trae、Cursor、Claude Code 与 Codex App','用自然语言描述需求','审查与测试 AI 生成代码'],practice:'把一个小功能写成可验证的需求，再用 AI 辅助实现并测试。'},
  {name:'【进阶】数据科学与智能分析基础',kind:'进阶',topics:['数据清洗与探索','统计与可视化','分析结论的可信度'],practice:'选择一份公开数据，完成清洗、图表和结论记录。'}
];
const pad = n => String(n).padStart(2,'0');
const label = i => i===0?'预科':pad(i);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shell = (body) => `<div class="site"><header class="site-head"><a class="logo" href="index.html"><b>AGENT</b><span>学习地图</span></a><span class="header-note">AI AGENT · 预科 + 17 阶段</span></header>${body}<footer>基于公开阶段名称编写的原创学习提要。讲义总结逐节补充。 <a href="https://www.itbaizhan.com/" target="_blank" rel="noreferrer">课程网站 ↗</a></footer></div>`;
function renderIndex(){const cards=stages.map((s,i)=>`<a class="stage-card" href="stage-${pad(i)}.html"><span class="number">${label(i)}</span><div><div class="meta">${esc(s.kind)} · 章节已核对 · 正文待整理</div><h2>${esc(s.name)}</h2><p>${esc(s.topics[0])} · ${esc(s.topics[1])}</p></div><span class="arrow">↗</span></a>`).join('');document.getElementById('app').innerHTML=shell(`<main><section class="hero"><div class="kicker">COURSE FIELD GUIDE / 2026</div><h1>从基础到实战，<br><em>逐阶段搭建</em> AI Agent 能力。</h1><p>按课程阶段建立独立知识页；每个项目附上可运行代码与核验记录。</p><div class="hero-facts"><span><b>18</b> 个阶段</span><span><b>01</b> 个已实现项目</span><span><b>待核对</b> 课程正文</span></div></section><section class="course-section"><div class="section-head"><h2>阶段目录</h2><p>依照截图中的教学顺序排列</p></div><div class="rail">${cards}</div></section><aside class="provenance"><strong>内容说明</strong><p>当前页面的知识点是根据公开阶段标题制作的预习提要。课程章节目录已在登录后的学习中心核对；正文目前仅核对 FastAPI 业务划分一节，后续继续逐节归纳。</p></aside></main>`)}
function renderStage(i){const s=stages[i];if(!s){location.href='index.html';return}const list=s.topics.map(t=>`<li>${esc(t)}</li>`).join('');const project=s.project?`<section class="project"><span class="kicker">可运行项目</span><h2>第二大脑 · 智能会议系统</h2><p>根据公开 13 节目录独立实现，含登录、会议上传、文字稿、结构化分析与前端。</p><p>代码位置：<code>/Users/edy/Desktop/code/second-brain-meeting</code></p><a href="http://127.0.0.1:8000/">打开运行中的项目 ↗</a></section>`:'';document.title=`${s.name} · AI Agent 学习地图`;document.getElementById('app').innerHTML=shell(`<main class="stage-page"><nav class="crumb"><a href="index.html">全部阶段</a> / ${label(i)}</nav><header class="stage-hero"><div class="kicker">STAGE ${label(i)} / ${esc(s.kind)}</div><h1>${esc(s.name)}</h1><p>从本阶段标题出发，先建立学习框架；课程正文核对后补充正式总结。</p><span class="status">课程正文：待逐节整理</span></header><div class="stage-grid"><section class="content-block"><div class="block-count">01 / 学习提要</div><h2>这一阶段先理解什么</h2><ul>${list}</ul><p class="content-note">这些是独立编写的预习要点，不代表讲师的具体授课内容。</p></section><section class="content-block"><div class="block-count">02 / 动手练习</div><h2>学完后做什么</h2><p>${esc(s.practice)}</p><div class="exercise-note">验收建议：能解释输入、处理过程和输出，并保留一次实际运行结果。</div></section></div>${project}<section class="pending"><div class="block-count">03 / 课程讲义总结</div><h2>课程讲义整理进度</h2><p>课程讲义已可访问，但本阶段尚未逐节阅读。完成后将在这里补充关键概念、示例、常见错误和知识检查题，并标注来源与核对日期。</p></section><nav class="pager">${i>0?`<a href="stage-${pad(i-1)}.html">← ${esc(stages[i-1].name)}</a>`:'<span></span>'}${i<stages.length-1?`<a href="stage-${pad(i+1)}.html">${esc(stages[i+1].name)} →</a>`:''}</nav></main>`)}
if(document.body.dataset.page==='index')renderIndex();else renderStage(Number(document.body.dataset.stage));
if(document.body.dataset.page==='stage'){
  const i=Number(document.body.dataset.stage);
  const pager=document.querySelector('.pager');
  const courseOutline={
    0:['程序员的基本素养与职业规划','Python 技术体系介绍','正确的学习方法与思维建立','程序员必备通用技能与素养'],
    1:['聊天机器人初体验','Python 入门','编程基本概念','序列','控制语句','函数和内存分析','面向对象','异常机制','模块','Novel 自动化生成系统'],
    2:['MySQL 数据库','后端服务开发 FastAPI'],
    3:['（第二大脑）智能会议系统'],
    4:['Coze 平台实战'],
    5:['大模型理论基础','大模型提示词工程'],
    6:['向量数据库对比与选型','NoSQL 数据库 Elasticsearch','RAG 基础理论','RAG 端到端快速体验'],
    7:['企业级 RAG 问答系统'],
    8:['Agent 理论基础','Agent 工具系统','Agent 框架','智能体 MCP','Agent Skills'],
    9:['百战智能运营平台'],
    10:['糖尿病 AI 健康助手'],
    11:['LegalMind 法律咨询系统'],
    12:['微调基础','使用 LLaMA-Factory 快速微调多个模型'],
    13:['大数据处理 Spark 概述','运行模式','RDD','内核进阶','Spark SQL'],
    14:['小龙虾 OpenClaw'],
    15:['Hermes-Agent'],
    16:['Trae 全功能解析与应用','AI 编程助手 Cursor 实战','Claude Code 实战手册','Codex App 保姆级教程'],
    17:['开发环境配置（Conda / UV）','Matplotlib 可视化','Seaborn 可视化','NumPy 科学计算','Pandas 数据处理','MySQL 数据库']
  };
  const outline=courseOutline[i];
  if(outline){
    pager.insertAdjacentHTML('beforebegin',`<section class="pending"><div class="block-count">已核实 / 课程章节目录</div><h2>本阶段的章节</h2><ol>${outline.map(x=>`<li>${esc(x)}</li>`).join('')}</ol><p class="content-note">来源：<a href="https://www.itbaizhan.com/stages/id/57" target="_blank" rel="noreferrer">课程学习中心</a>，2026-10-26 核对。长阶段的末尾章节可能因页面截断而未显示。</p></section>`);
    document.querySelector('.stage-hero .status').textContent='章节目录：已核对 · 课程正文：待逐节整理';
  }
  if(i===2){
    pager.insertAdjacentHTML('beforebegin',`<section class="project"><div class="block-count">已核实讲义 / FastAPI 业务划分</div><h2>用 APIRouter 分开业务端点</h2><p>当应用的路由增多时，可按业务拆成独立路由器，再由主应用注册。路由器能统一设置前缀，使 URL 结构和代码组织保持一致；路由器也可以嵌套。它负责组织端点，不负责替代数据库连接或前端页面。</p><p>最小实践：为用户业务建立 <code>APIRouter(prefix="/users")</code>，在主应用中调用 <code>include_router</code>。检查 GET、POST 路径是否都带上正确前缀。</p><p class="content-note">来源：<a href="https://www.itbaizhan.com/wiki/23620.html" target="_blank" rel="noreferrer">课程讲义《FastAPI业务划分》</a>，2026-10-26 已核对。此处为原创概括。</p></section>`);
    document.querySelector('.stage-hero .status').textContent='讲义进度：已核对 1 节，阶段未完成';
  }
  if(i===3){
    pager.insertAdjacentHTML('beforebegin',`<section class="project"><div class="block-count">已核实公开目录 / 第二大脑智能会议系统</div><h2>项目的 13 个课程节点</h2><ol><li>项目介绍与 Python 环境</li><li>AI 工具和数据库服务配置</li><li>项目初始化与 ORM 配置</li><li>用户功能与会议上传</li><li>语音转文字与 Agent 结构化分析</li><li>综合测试、前端生成与修复问题</li></ol><p class="content-note">以上为 13 节标题的分组概括。来源：<a href="https://www.itbaizhan.com/update/439.html" target="_blank" rel="noreferrer">百战程序员课程更新</a>；本项目讲义尚未逐节核对。</p></section>`);
  }
}
