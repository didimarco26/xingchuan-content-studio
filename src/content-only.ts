// 独立内容站编译期开关：仅保留「内容分析与脚本生成」板块。
// 数据源（hot-cases.json / content-formulas.json）、FaaS stage、分析逻辑与星川决策工作台完全一致，
// 仅在视图入口层锁定 script 模式并隐藏其它模式入口，不改动任何业务逻辑代码。
export const CONTENT_ONLY = true;
