/**
 * 育成高中｜資訊科技學習管理平台｜共用 GAS V43
 *
 * 本版重點：
 * 1. 保留原本 CH01 / CH05 的上傳相容性。
 * 2. 新增 CH02_2_1 / CH02_2_2 / CH02_2_3。
 * 3. 特別相容 2-1 舊版 HTML：
 *      action: 'saveCh02_2_1'
 * 4. 2-1 不再被誤判成 ch01 / ch05。
 * 5. 每個章節可以使用不同試算表，也可以全部使用同一份。
 *
 * 建議：
 *   如果您的 ch01、ch05、2-1、2-2、2-3 都放在同一份試算表，
 *   直接執行 setupAllSheets() 即可。
 */

/* =========================================================
   工作表名稱
========================================================= */

const CH01_SHEET = 'ch01';
const CH05_SHEET = 'ch05';
const CH21_SHEET = 'ch02_2_1';
const CH22_SHEET = 'ch02_2_2';
const CH23_SHEET = 'ch02_2_3';

/* =========================================================
   Script Properties
========================================================= */

const PROP_CH01 = 'CH01_SPREADSHEET_ID';
const PROP_CH05 = 'CH05_SPREADSHEET_ID';
const PROP_CH21 = 'CH02_2_1_SPREADSHEET_ID';
const PROP_CH22 = 'CH02_2_2_SPREADSHEET_ID';
const PROP_CH23 = 'CH02_2_3_SPREADSHEET_ID';
const CH31_SHEET='ch03_1', CH32_SHEET='ch03_2', CH33_SHEET='ch03_3';
const CH41_SHEET='ch04_1', CH42_SHEET='ch04_2', CH43_SHEET='ch04_3';
const PROP_CH31='CH03_1_SPREADSHEET_ID', PROP_CH32='CH03_2_SPREADSHEET_ID', PROP_CH33='CH03_3_SPREADSHEET_ID';
const PROP_CH41='CH04_1_SPREADSHEET_ID', PROP_CH42='CH04_2_SPREADSHEET_ID', PROP_CH43='CH04_3_SPREADSHEET_ID';

/* =========================================================
   CH01 欄位
   保留原本共用 GAS 的主要欄位
========================================================= */

const CH01_CHECKS = [
  ['hardware', '檢核_章前資訊處理'],
  ['password', '檢核_密碼記憶'],
  ['lang', '檢核_程式語言'],
  ['translate', '檢核_翻譯器與編譯器'],
  ['error', '檢核_程式錯誤'],
  ['ide', '檢核_Python IDE'],
  ['type', '檢核_資料型態'],
  ['operator', '檢核_運算子'],
  ['variable', '檢核_變數與記憶體'],
  ['io', '檢核_輸入與輸出'],
  ['quiz', '檢核_第1章測驗']
];

const CH01_HEADERS = [
  '時間','班級','座號','姓名','完成單元','學習進度',
  '學習總分','基本分','加分','概念分數','測驗分數','程式挑戰分數',
  '互動／練習','測驗答案','程式挑戰紀錄','互動操作紀錄',
  '電腦IP（伺服器觀察）','電腦名稱（瀏覽器無法直接取得）',
  '裝置資訊JSON','完成狀態JSON','我的學習心得',
  ...CH01_CHECKS.map(x => x[1])
];

/* =========================================================
   CH05 欄位
========================================================= */

const CH05_HEADERS = [
  '時間','班級','座號','姓名','完成單元','學習進度',
  '學習總分','測驗分數','四盤最佳步數','五盤最佳步數',
  '四盤移動紀錄','五盤移動紀錄','測驗答案',
  '完成狀態JSON','我的學習心得'
];

/* =========================================================
   2-1 欄位
   完全相容原本 ch02_2-1 GAS
========================================================= */

const CH21_HEADERS = [
  '時間',
  '班級',
  '座號',
  '姓名',
  '複習闖關最高分',
  '複習作答次數',
  '程式①優惠價格',
  '程式②BMI',
  '程式③Pybot',
  '程式④攝氏轉華氏',
  '程式填空',
  '邏輯運算①',
  '邏輯運算②',
  '字串運算',
  '選擇題分數',
  '學習心得',
  '正式成績',
  '完成進度',
  '原始資料JSON'
];

/* =========================================================
   2-2 欄位
========================================================= */

const CH22_HEADERS = [
  '時間','班級','座號','姓名',
  '學習總分','完成進度',
  '前節複習','圖文筆記','語法情境','IDE',
  '課本練習','程式挑戰','課後練習','學習心得',
  '完成狀態JSON','原始資料JSON'
];

/* =========================================================
   2-3 欄位
========================================================= */

const CH23_HEADERS = [
  '時間','班級','座號','姓名',
  '學習總分','完成進度',
  '前節複習','本節摘要','語法情境','IDE',
  '課本練習','程式挑戰','課後練習','學習心得',
  '完成狀態JSON','原始資料JSON'
];



const CH31_HEADERS=['時間','班級','座號','姓名','學習總分','完成進度','小測驗分數','索引與取值','list方法','list方法實作','二維串列','程式挑戰','學習心得','完成狀態JSON','原始資料JSON'];
const CH32_HEADERS=['時間','班級','座號','姓名','學習總分','完成進度','小測驗分數','選擇排序動畫','選擇排序程式','氣泡排序動畫','橘子秤重情境','程式挑戰','學習心得','完成狀態JSON','原始資料JSON'];
const CH33_HEADERS=['時間','班級','座號','姓名','學習總分','完成進度','小測驗分數','循序搜尋','二元搜尋','搜尋效能比較','程式挑戰','學習心得','完成狀態JSON','原始資料JSON'];
const CH41_HEADERS=['時間','班級','座號','姓名','學習總分','完成進度','小測驗分數','內建函式','數值函式','字串函式','學生實作','程式挑戰','學習心得','完成狀態JSON','原始資料JSON'];
const CH42_HEADERS=['時間','班級','座號','姓名','學習總分','完成進度','小測驗分數','亂數函式','日期與日曆','生活情境實作','程式挑戰','學習心得','完成狀態JSON','原始資料JSON'];
const CH43_HEADERS=['時間','班級','座號','姓名','學習總分','完成進度','小測驗分數','自訂函式','參數與呼叫','return與傳回值','學生實作','程式挑戰','學習心得','完成狀態JSON','原始資料JSON'];

/* =========================================================
   初始化：各章節可分別設定
========================================================= */

function setupCh01() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('請從 ch01 使用的 Google 試算表執行 setupCh01()。');

  setProp_(PROP_CH01, ss.getId());
  ensureHeaders_(getOrCreateSheet_(ss, CH01_SHEET), CH01_HEADERS);

  return 'setupCh01 完成：' + ss.getName();
}

function setupCh05() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('請從 ch05 使用的 Google 試算表執行 setupCh05()。');

  setProp_(PROP_CH05, ss.getId());
  ensureHeaders_(getOrCreateSheet_(ss, CH05_SHEET), CH05_HEADERS);

  return 'setupCh05 完成：' + ss.getName();
}

function setupCh02_2_1() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('請從 2-1 使用的 Google 試算表執行 setupCh02_2_1()。');

  setProp_(PROP_CH21, ss.getId());
  ensureHeaders_(getOrCreateSheet_(ss, CH21_SHEET), CH21_HEADERS);

  return 'setupCh02_2_1 完成：' + ss.getName();
}

function setupCh02_2_2() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('請從 2-2 使用的 Google 試算表執行 setupCh02_2_2()。');

  setProp_(PROP_CH22, ss.getId());
  ensureHeaders_(getOrCreateSheet_(ss, CH22_SHEET), CH22_HEADERS);

  return 'setupCh02_2_2 完成：' + ss.getName();
}

function setupCh02_2_3() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('請從 2-3 使用的 Google 試算表執行 setupCh02_2_3()。');

  setProp_(PROP_CH23, ss.getId());
  ensureHeaders_(getOrCreateSheet_(ss, CH23_SHEET), CH23_HEADERS);

  return 'setupCh02_2_3 完成：' + ss.getName();
}



function setupCh03_1(){const ss=SpreadsheetApp.getActiveSpreadsheet();if(!ss)throw new Error('請從 CH3-1 使用的 Google 試算表執行 setupCh03_1()。');setProp_(PROP_CH31,ss.getId());ensureHeaders_(getOrCreateSheet_(ss,CH31_SHEET),CH31_HEADERS);return 'setupCh03_1 完成：'+ss.getName();}
function setupCh03_2(){const ss=SpreadsheetApp.getActiveSpreadsheet();if(!ss)throw new Error('請從 CH3-2 使用的 Google 試算表執行 setupCh03_2()。');setProp_(PROP_CH32,ss.getId());ensureHeaders_(getOrCreateSheet_(ss,CH32_SHEET),CH32_HEADERS);return 'setupCh03_2 完成：'+ss.getName();}
function setupCh03_3(){const ss=SpreadsheetApp.getActiveSpreadsheet();if(!ss)throw new Error('請從 CH3-3 使用的 Google 試算表執行 setupCh03_3()。');setProp_(PROP_CH33,ss.getId());ensureHeaders_(getOrCreateSheet_(ss,CH33_SHEET),CH33_HEADERS);return 'setupCh03_3 完成：'+ss.getName();}

/* =========================================================
   最推薦：五個工作表全部使用同一份 Google 試算表
========================================================= */

function setupCh04_1(){const ss=SpreadsheetApp.getActiveSpreadsheet();if(!ss)throw new Error('請從 CH4-1 使用的 Google 試算表執行 setupCh04_1()。');setProp_(PROP_CH41,ss.getId());ensureHeaders_(getOrCreateSheet_(ss,CH41_SHEET),CH41_HEADERS);return 'setupCh04_1 完成：'+ss.getName();}
function setupCh04_2(){const ss=SpreadsheetApp.getActiveSpreadsheet();if(!ss)throw new Error('請從 CH4-2 使用的 Google 試算表執行 setupCh04_2()。');setProp_(PROP_CH42,ss.getId());ensureHeaders_(getOrCreateSheet_(ss,CH42_SHEET),CH42_HEADERS);return 'setupCh04_2 完成：'+ss.getName();}
function setupCh04_3(){const ss=SpreadsheetApp.getActiveSpreadsheet();if(!ss)throw new Error('請從 CH4-3 使用的 Google 試算表執行 setupCh04_3()。');setProp_(PROP_CH43,ss.getId());ensureHeaders_(getOrCreateSheet_(ss,CH43_SHEET),CH43_HEADERS);return 'setupCh04_3 完成：'+ss.getName();}

function setupAllSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error(
      '請從「要存放全部學習紀錄的 Google 試算表」→ 擴充功能 → Apps Script 執行 setupAllSheets()。'
    );
  }

  const id = ss.getId();

  PropertiesService.getScriptProperties()
    .setProperties({
      [PROP_CH01]: id,
      [PROP_CH05]: id,
      [PROP_CH21]: id,
      [PROP_CH22]: id,
      [PROP_CH23]: id,
      [PROP_CH31]: id,
      [PROP_CH32]: id,
      [PROP_CH33]: id,
      [PROP_CH41]: id,
      [PROP_CH42]: id,
      [PROP_CH43]: id
    }, true);

  ensureHeaders_(getOrCreateSheet_(ss, CH01_SHEET), CH01_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH05_SHEET), CH05_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH21_SHEET), CH21_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH22_SHEET), CH22_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH23_SHEET), CH23_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH31_SHEET), CH31_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH32_SHEET), CH32_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH33_SHEET), CH33_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH41_SHEET), CH41_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH42_SHEET), CH42_HEADERS);
  ensureHeaders_(getOrCreateSheet_(ss, CH43_SHEET), CH43_HEADERS);

  return (
    'setupAllSheets 完成：' + ss.getName() +
    '／已建立或確認 ch01、ch05、ch02_2_1、ch02_2_2、ch02_2_3、ch03_1～ch03_3、ch04_1～ch04_3'
  );
}


/* =========================================================
   Web App GET
========================================================= */

function doGet(e) {
  // 2-2 V35/V38 HTML uses JSONP confirmation after POST.
  if (e && e.parameter && e.parameter.action === 'check') {
    return checkUpload_(e.parameter.uploadId || '', e.parameter.callback || '');
  }
  return json_({
    ok: true,
    message: '育成高中資訊科技學習平台｜共用 GAS V43 已啟用',
    sheets: {
      ch01: CH01_SHEET,
      ch05: CH05_SHEET,
      ch02_2_1: CH21_SHEET,
      ch02_2_2: CH22_SHEET,
      ch02_2_3: CH23_SHEET,
      ch03_1: CH31_SHEET,
      ch03_2: CH32_SHEET,
      ch03_3: CH33_SHEET,
      ch04_1: CH41_SHEET,
      ch04_2: CH42_SHEET,
      ch04_3: CH43_SHEET
    }
  });
}


/* =========================================================
   Web App POST
========================================================= */

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(15000);

    const raw = getRawPayload_(e);
    if (!raw) {
      return json_({
        ok: false,
        error: '沒有收到 POST 資料'
      });
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch (parseErr) {
      return json_({
        ok: false,
        error: 'POST 資料不是有效 JSON',
        detail: String(parseErr)
      });
    }

    /*
     * ★ 最重要的修正
     *
     * 2-1 舊版 HTML 使用：
     *   action:'saveCh02_2_1'
     *
     * 不能再只靠 chapter 判斷。
     */
    const action = String(data.action || '').trim();

    if (
      action === 'saveCh02_2_1' ||
      action === 'saveCh02_1' ||
      action === 'save21'
    ) {
      return saveCh21_(e, data);
    }

    if (
      action === 'saveCh02_2_2' ||
      action === 'saveCh02_2' ||
      action === 'save22'
    ) {
      return saveCh22_(e, data);
    }

    if (
      action === 'saveCh02_2_3' ||
      action === 'saveCh03' ||
      action === 'save23'
    ) {
      return saveCh23_(e, data);
    }

    // 舊 2-3 皮卡丘頁面使用 action:'saveCh02' + section:'2-3'
    if (action === 'saveCh02') {
      const sec = normalizeChapter_(data.section || '');
      if (sec === 'ch02_2_1') return saveCh21_(e, data);
      if (sec === 'ch02_2_2') return saveCh22_(e, data);
      if (sec === 'ch02_2_3') return saveCh23_(e, data);
    }

    // 2-2 V35/V38 會送 type:'chapter2' + section:'2-2'
    if (String(data.type || '').toLowerCase() === 'chapter2') {
      const sec = normalizeChapter_(data.section || '');
      if (sec === 'ch02_2_1') return saveCh21_(e, data);
      if (sec === 'ch02_2_2') return saveCh22_(e, data);
      if (sec === 'ch02_2_3') return saveCh23_(e, data);
    }

    if (action === 'saveCh03_1' || action === 'save31') return saveCh31_(e, data);
    if (action === 'saveCh03_2' || action === 'save32') return saveCh32_(e, data);
    if (action === 'saveCh03_3' || action === 'save33') return saveCh33_(e, data);
    if (action === 'saveCh04_1' || action === 'save41' || action === 'saveCH41' || action === 'saveCh41') return saveCh41_(e, data);
    if (action === 'saveCh04_2' || action === 'save42' || action === 'saveCH42' || action === 'saveCh42') return saveCh42_(e, data);
    if (action === 'saveCh04_3' || action === 'save43' || action === 'saveCH43' || action === 'saveCh43') return saveCh43_(e, data);

    /*
     * 新版 HTML 若傳 chapter，也能正確判斷。
     */
    const chapter = normalizeChapter_(
      data.chapter ||
      data.chapterId ||
      data.completeUnit ||
      ''
    );

    if (chapter === 'ch02_2_1') return saveCh21_(e, data);
    if (chapter === 'ch02_2_2') return saveCh22_(e, data);
    if (chapter === 'ch02_2_3') return saveCh23_(e, data);

    if (chapter === 'ch01') return saveCh01_(e, data);
    if (chapter === 'ch05') return saveCh05_(e, data);
    if (chapter === 'ch03_1') return saveCh31_(e, data);
    if (chapter === 'ch03_2') return saveCh32_(e, data);
    if (chapter === 'ch03_3') return saveCh33_(e, data);
    if (chapter === 'ch04_1') return saveCh41_(e, data);
    if (chapter === 'ch04_2') return saveCh42_(e, data);
    if (chapter === 'ch04_3') return saveCh43_(e, data);

    /*
     * 舊版 CH01 / CH05：
     * CH01 有 scoreBreakdown / programChallenge
     * CH05 有 bestHanoi / hanoiMoves
     */
    const resolved = resolveLegacyChapter_(data);

    if (resolved === 'ch01') return saveCh01_(e, data);
    if (resolved === 'ch05') return saveCh05_(e, data);

    return json_({
      ok: false,
      error: '無法判斷資料屬於哪個章節',
      hint: '2-1 請使用 action: saveCh02_2_1'
    });

  } catch (err) {
    return json_({
      ok: false,
      error: String(err && err.stack ? err.stack : err)
    });

  } finally {
    try {
      lock.releaseLock();
    } catch (_) {}
  }
}


/* =========================================================
   2-1 儲存
   完全相容原本 2-1 HTML payload
========================================================= */

function saveCh21_(e, data) {
  const ss = getSpreadsheetByProp_(PROP_CH21, 'ch02_2_1');
  const sh = getOrCreateSheet_(ss, CH21_SHEET);
  ensureHeaders_(sh, CH21_HEADERS);

  const row = [
    new Date(),
    clean_(data.classNo || data.className),
    clean_(data.seatNo || data.seat),
    clean_(data.studentName || data.name),

    number_(data.reviewBest),
    number_(data.reviewAttempts),

    boolText_(data.program1),
    boolText_(data.program2),
    boolText_(data.program3),
    boolText_(data.program4),

    boolText_(data.fill5),
    boolText_(data.logic1),
    boolText_(data.logic2),
    boolText_(data.string15),

    number_(data.mcScore),
    clean_(data.reflection),

    number_(data.formalScore),
    clean_(data.progress),

    safeJson_(data)
  ];

  sh.appendRow(row);
  SpreadsheetApp.flush();

  return json_({
    ok: true,
    action: 'saveCh02_2_1',
    sheet: CH21_SHEET,
    message: '2-1 學習成果已寫入 Google 試算表'
  });
}


/* =========================================================
   2-2 儲存
   兼容目前不同版本 HTML
========================================================= */

function saveCh22_(e, data) {
  const ss = getSpreadsheetByProp_(PROP_CH22, 'ch02_2_2');
  const sh = getOrCreateSheet_(ss, CH22_SHEET);
  ensureHeaders_(sh, CH22_HEADERS);

  const s = (data.s22 && typeof data.s22 === 'object') ? data.s22 : {};
  const sb = (data.scoreBreakdown && typeof data.scoreBreakdown === 'object') ? data.scoreBreakdown : {};
  const complete = data.complete || data.completed || s.complete || {};

  sh.appendRow([
    new Date(),
    clean_(data.classNo || data.className || data.student?.class),
    clean_(data.seatNo || data.seat || data.student?.seat),
    clean_(data.studentName || data.name || data.student?.name),

    number_(data.formalScore ?? data.score ?? data.totalScore ?? sb.total),
    clean_(data.progress),

    number_(data.quizScore ?? sb.quiz ?? s.quiz ?? 0),
    number_(data.notesScore ?? sb.notes ?? s.notes ?? 0),
    number_(data.syntaxScore ?? sb.syntax ?? s.syntax ?? 0),
    number_(data.ideScore ?? sb.ide ?? s.ide ?? 0),
    number_(data.practiceScore ?? sb.context ?? s.practice ?? 0),
    number_(data.challengeScore ?? sb.challenge ?? s.challenge ?? 0),
    number_(data.homeworkScore ?? sb.hw ?? s.hw ?? 0),
    clean_(data.reflection || sb.reflection || s.reflection),

    safeJson_(complete),
    safeJson_(data)
  ]);

  SpreadsheetApp.flush();

  return json_({
    ok: true,
    action: 'saveCh02_2_2',
    sheet: CH22_SHEET,
    message: '2-2 學習成果已寫入 Google 試算表'
  });
}


/* =========================================================
   2-3 儲存
========================================================= */

function saveCh23_(e, data) {
  const ss = getSpreadsheetByProp_(PROP_CH23, 'ch02_2_3');
  const sh = getOrCreateSheet_(ss, CH23_SHEET);

  ensureHeaders_(sh, CH23_HEADERS);

  const s = data.s23 || data.section || {};
  const complete = data.complete || data.completed || s.complete || {};

  sh.appendRow([
    new Date(),
    clean_(data.classNo || data.className || data.student?.class),
    clean_(data.seatNo || data.seat || data.student?.seat),
    clean_(data.studentName || data.name || data.student?.name),

    number_(data.formalScore ?? data.score ?? data.totalScore),
    clean_(data.progress),

    number_(data.quizScore ?? s.quiz ?? 0),
    number_(data.notesScore ?? s.notes ?? 0),
    number_(data.syntaxScore ?? s.syntax ?? 0),
    number_(data.ideScore ?? s.ide ?? 0),
    number_(data.practiceScore ?? s.practice ?? 0),
    number_(data.challengeScore ?? s.challenge ?? 0),
    number_(data.homeworkScore ?? s.hw ?? 0),
    clean_(data.reflection || s.reflection),

    safeJson_(complete),
    safeJson_(data)
  ]);

  SpreadsheetApp.flush();

  return json_({
    ok: true,
    action: 'saveCh02_2_3',
    sheet: CH23_SHEET,
    message: '2-3 學習成果已寫入 Google 試算表'
  });
}



function saveCh31_(e,d){const ss=getSpreadsheetByProp_(PROP_CH31,CH31_SHEET),sh=getOrCreateSheet_(ss,CH31_SHEET),c=d.complete||{};ensureHeaders_(sh,CH31_HEADERS);sh.appendRow([new Date(),clean_(d.classNo),clean_(d.seatNo),clean_(d.studentName),number_(d.score??d.formalScore),clean_(d.progress),number_(d.quizScore),boolText_(c.index),boolText_(c.methods),boolText_(c.listPractice),boolText_(c.twoD),boolText_(c.challenge),clean_(d.reflection),safeJson_(c),safeJson_(d)]);SpreadsheetApp.flush();return json_({ok:true,action:'saveCh03_1',sheet:CH31_SHEET,message:'CH3-1 學習成果已寫入 Google 試算表'});}
function saveCh32_(e,d){const ss=getSpreadsheetByProp_(PROP_CH32,CH32_SHEET),sh=getOrCreateSheet_(ss,CH32_SHEET),c=d.complete||{};ensureHeaders_(sh,CH32_HEADERS);sh.appendRow([new Date(),clean_(d.classNo),clean_(d.seatNo),clean_(d.studentName),number_(d.score??d.formalScore),clean_(d.progress),number_(d.quizScore),boolText_(c.selectionAnim),boolText_(c.selectionCode),boolText_(c.bubbleAnim),boolText_(c.orange),boolText_(c.challenge),clean_(d.reflection),safeJson_(c),safeJson_(d)]);SpreadsheetApp.flush();return json_({ok:true,action:'saveCh03_2',sheet:CH32_SHEET,message:'CH3-2 學習成果已寫入 Google 試算表'});}
function saveCh33_(e,d){const ss=getSpreadsheetByProp_(PROP_CH33,CH33_SHEET),sh=getOrCreateSheet_(ss,CH33_SHEET),c=d.complete||{};ensureHeaders_(sh,CH33_HEADERS);sh.appendRow([new Date(),clean_(d.classNo),clean_(d.seatNo),clean_(d.studentName),number_(d.score??d.formalScore),clean_(d.progress),number_(d.quizScore),boolText_(c.sequential),boolText_(c.binary),boolText_(c.compare),boolText_(c.challenge),clean_(d.reflection),safeJson_(c),safeJson_(d)]);SpreadsheetApp.flush();return json_({ok:true,action:'saveCh03_3',sheet:CH33_SHEET,message:'CH3-3 學習成果已寫入 Google 試算表'});}

/* =========================================================
   CH01 儲存
   保留舊版資料結構
========================================================= */

function saveCh01_(e, data) {
  const ss = getSpreadsheetByProp_(PROP_CH01, 'ch01');
  const sh = getOrCreateSheet_(ss, CH01_SHEET);
  ensureHeaders_(sh, CH01_HEADERS);

  const student = data.student || {};
  const quiz = data.quiz || {};
  const breakdown = data.scoreBreakdown || {};
  const complete = data.complete || {};

  const row = [
    new Date(),

    clean_(student.class || data.classNo || data.className),
    clean_(student.seat || data.seatNo || data.seat),
    clean_(student.name || data.studentName || data.name),

    Object.keys(complete).filter(k => complete[k]).join('、'),
    clean_(data.progress),

    number_(data.score ?? breakdown.total),
    number_(breakdown.base ?? breakdown.basic ?? data.baseScore),
    number_(breakdown.bonus ?? data.bonus),
    number_(breakdown.concept ?? data.conceptScore),
    number_(breakdown.quiz ?? data.quizScore ?? quiz.score),
    number_(breakdown.program ?? data.programScore),

    safeJson_(data.practice || data.interactionLog || {}),
    safeJson_(quiz.answers || quiz),
    safeJson_(data.practice || data.programChallenge || {}),
    safeJson_(data.interactionLog || []),

    clean_(data.clientIp || data.ip || '無法由 GAS 可靠取得'),
    clean_(data.computerName || data.deviceName || '瀏覽器無法直接取得 Windows 電腦名稱'),
    safeJson_(data.device || data.deviceInfo || {}),

    safeJson_(complete),
    clean_(data.reflection || data.learningReflection || data.myReflection),

    ...CH01_CHECKS.map(([key]) => complete[key] ? '完成' : '未完成')
  ];

  sh.appendRow(row);
  SpreadsheetApp.flush();

  return json_({
    ok: true,
    chapter: 'ch01',
    sheet: CH01_SHEET,
    message: 'CH01 學習成果已寫入 Google 試算表'
  });
}


/* =========================================================
   CH05 儲存
========================================================= */

function saveCh05_(e, data) {
  const ss = getSpreadsheetByProp_(PROP_CH05, 'ch05');
  const sh = getOrCreateSheet_(ss, CH05_SHEET);
  ensureHeaders_(sh, CH05_HEADERS);

  const student = data.student || {};
  const quiz = data.quiz || {};
  const best = data.bestHanoi || {};
  const moves = data.hanoiMoves || {};
  const complete = data.complete || {};

  const fourLog = formatHanoiMoves_(moves.four || []);
  const fiveLog = formatHanoiMoves_(moves.five || []);

  sh.appendRow([
    new Date(),
    clean_(student.class || data.classNo || data.className),
    clean_(student.seat || data.seatNo || data.seat),
    clean_(student.name || data.studentName || data.name),

    Object.keys(complete).filter(k => complete[k]).join('、'),
    clean_(data.progress),

    number_(data.score),
    number_(quiz.score),

    clean_(best.four),
    clean_(best.five),

    fourLog,
    fiveLog,

    safeJson_(quiz.answers || quiz),
    safeJson_(complete),
    clean_(data.reflection || data.learningReflection || data.myReflection)
  ]);

  SpreadsheetApp.flush();

  return json_({
    ok: true,
    chapter: 'ch05',
    sheet: CH05_SHEET,
    message: 'CH05 學習成果已寫入 Google 試算表'
  });
}


/* =========================================================
   測試函式
========================================================= */

function testCh02_2_1() {
  const payload = {
    action: 'saveCh02_2_1',
    classNo: 'GAS測試班',
    seatNo: '99',
    studentName: '2-1 GAS測試',
    reviewBest: 100,
    reviewAttempts: 1,
    program1: true,
    program2: true,
    program3: true,
    program4: true,
    fill5: true,
    logic1: true,
    logic2: true,
    string15: true,
    mcScore: 10,
    reflection: '這是第二章2-1 GAS測試資料。',
    formalScore: 100,
    progress: 10
  };

  const result = doPost({
    postData: {
      contents: JSON.stringify(payload)
    }
  });

  Logger.log(result.getContent());
  return result.getContent();
}

function testAllSheets() {
  return setupAllSheets();
}


/* =========================================================
   試算表工具
========================================================= */

function getSpreadsheetByProp_(prop, label) {
  const id = PropertiesService.getScriptProperties().getProperty(prop);

  if (!id) {
    throw new Error(
      label + ' 尚未設定試算表。請先執行對應的 setup 函式，' +
      '或直接執行 setupAllSheets()。'
    );
  }

  return SpreadsheetApp.openById(id);
}

function setProp_(key, value) {
  PropertiesService.getScriptProperties().setProperty(key, value);
}

function getOrCreateSheet_(ss, name) {
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  return sh;
}

function ensureHeaders_(sh, headers) {
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    sh.setFrozenRows(1);
    sh.autoResizeColumns(1, headers.length);
    return;
  }

  const width = Math.max(sh.getLastColumn(), headers.length);
  const current = sh.getRange(1, 1, 1, width).getValues()[0];

  headers.forEach((header, i) => {
    if (String(current[i] || '').trim() === '') {
      sh.getRange(1, i + 1).setValue(header);
    }
  });

  sh.setFrozenRows(1);
}


/* =========================================================
   Payload / chapter 工具
========================================================= */

function getRawPayload_(e) {
  if (e && e.parameter && e.parameter.payload) {
    return e.parameter.payload;
  }

  if (e && e.postData && e.postData.contents) {
    return e.postData.contents;
  }

  return '';
}

function normalizeChapter_(value) {
  const s = String(value || '').trim().toLowerCase();

  if (
    s === 'ch02_2_1' ||
    s === '2-1' ||
    s === '2_1' ||
    s === 'ch2-1' ||
    s === 'ch21'
  ) return 'ch02_2_1';

  if (
    s === 'ch02_2_2' ||
    s === '2-2' ||
    s === '2_2' ||
    s === 'ch2-2' ||
    s === 'ch22'
  ) return 'ch02_2_2';

  if (
    s === 'ch02_2_3' ||
    s === '2-3' ||
    s === '2_3' ||
    s === 'ch2-3' ||
    s === 'ch23'
  ) return 'ch02_2_3';

  if (s === 'ch01' || s === '1' || s === 'chapter01') return 'ch01';
  if (s === 'ch05' || s === '5' || s === 'chapter05') return 'ch05';

  if (s === 'ch03_1' || s === 'ch3_1' || s === 'ch31' || s === '3-1' || s === '3_1') return 'ch03_1';
  if (s === 'ch03_2' || s === 'ch3_2' || s === 'ch32' || s === '3-2' || s === '3_2') return 'ch03_2';
  if (s === 'ch03_3' || s === 'ch3_3' || s === 'ch33' || s === '3-3' || s === '3_3') return 'ch03_3';
  if (s === 'ch04_1' || s === 'ch4_1' || s === 'ch41' || s === '4-1' || s === '4_1') return 'ch04_1';
  if (s === 'ch04_2' || s === 'ch4_2' || s === 'ch42' || s === '4-2' || s === '4_2') return 'ch04_2';
  if (s === 'ch04_3' || s === 'ch4_3' || s === 'ch43' || s === '4-3' || s === '4_3') return 'ch04_3';

  return '';
}

function resolveLegacyChapter_(data) {
  if (data.chapter === 'ch01' || data.chapterId === 'ch01') return 'ch01';
  if (data.chapter === 'ch05' || data.chapterId === 'ch05') return 'ch05';

  if (data.bestHanoi || data.hanoiMoves) return 'ch05';

  if (
    data.scoreBreakdown ||
    data.programChallenge ||
    data.interactionLog ||
    data.scoreRules
  ) return 'ch01';

  return '';
}


/* =========================================================
   2-2 上傳確認：支援 V35/V38 HTML 的 JSONP check
========================================================= */
function checkUpload_(uploadId, callback) {
  const cb = clean_(callback);
  if (!cb || !/^[A-Za-z_$][0-9A-Za-z_$]*$/.test(cb)) {
    return json_({ok:false,error:'無效 callback'});
  }
  let found = null;
  const props = [
    [PROP_CH22, CH22_SHEET],
    [PROP_CH23, CH23_SHEET],
    [PROP_CH21, CH21_SHEET]
  ];
  if (uploadId) {
    for (const [prop, sheetName] of props) {
      try {
        const id = PropertiesService.getScriptProperties().getProperty(prop);
        if (!id) continue;
        const sh = SpreadsheetApp.openById(id).getSheetByName(sheetName);
        if (!sh || sh.getLastRow() < 2) continue;
        const lastCol = sh.getLastColumn();
        const values = sh.getRange(2, 1, sh.getLastRow()-1, lastCol).getValues();
        for (let i = values.length - 1; i >= 0; i--) {
          const raw = String(values[i][lastCol-1] || '');
          if (raw.indexOf(uploadId) !== -1) {
            found = {ok:true,row:i+2,student:String(values[i][3] || ''),sheet:sheetName};
            break;
          }
        }
        if (found) break;
      } catch (_) {}
    }
  }
  if (!found) found = {ok:false,error:'尚未找到此 uploadId 的寫入紀錄',uploadId:uploadId};
  return ContentService.createTextOutput(cb + '(' + JSON.stringify(found) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

/* =========================================================
   一般工具
========================================================= */

function clean_(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function number_(value) {
  if (value === null || value === undefined || value === '') return 0;
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function boolText_(value) {
  return (
    value === true ||
    String(value).toLowerCase() === 'true'
  ) ? '完成' : '未完成';
}

function safeJson_(value) {
  try {
    return JSON.stringify(value == null ? {} : value);
  } catch (err) {
    return String(value);
  }
}

function formatHanoiMoves_(moves) {
  if (!Array.isArray(moves)) return '';

  return moves.map((m, i) => {
    if (Array.isArray(m)) {
      return `${i + 1}. 盤${m[0]}：${m[1]}→${m[2]}`;
    }

    if (m && typeof m === 'object') {
      return `${i + 1}. ${safeJson_(m)}`;
    }

    return `${i + 1}. ${String(m)}`;
  }).join('；');
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function saveCh41_(e,d){const ss=getSpreadsheetByProp_(PROP_CH41,CH41_SHEET),sh=getOrCreateSheet_(ss,CH41_SHEET),c=d.complete||{};ensureHeaders_(sh,CH41_HEADERS);sh.appendRow([new Date(),clean_(d.classNo),clean_(d.seatNo),clean_(d.studentName),number_(d.score??d.formalScore),clean_(d.progress),number_(d.quizScore),boolText_(c.builtin),boolText_(c.number),boolText_(c.string),boolText_(c.practice),boolText_(c.challenge),clean_(d.reflection),safeJson_(c),safeJson_(d)]);SpreadsheetApp.flush();return json_({ok:true,action:'saveCh04_1',sheet:CH41_SHEET,message:'CH4-1 學習成果已寫入 Google 試算表'});}
function saveCh42_(e,d){const ss=getSpreadsheetByProp_(PROP_CH42,CH42_SHEET),sh=getOrCreateSheet_(ss,CH42_SHEET),c=d.complete||{};ensureHeaders_(sh,CH42_HEADERS);sh.appendRow([new Date(),clean_(d.classNo),clean_(d.seatNo),clean_(d.studentName),number_(d.score??d.formalScore),clean_(d.progress),number_(d.quizScore),boolText_(c.random),boolText_(c.date),boolText_(c.practice),boolText_(c.challenge),clean_(d.reflection),safeJson_(c),safeJson_(d)]);SpreadsheetApp.flush();return json_({ok:true,action:'saveCh04_2',sheet:CH42_SHEET,message:'CH4-2 學習成果已寫入 Google 試算表'});}
function saveCh43_(e,d){const ss=getSpreadsheetByProp_(PROP_CH43,CH43_SHEET),sh=getOrCreateSheet_(ss,CH43_SHEET),c=d.complete||{};ensureHeaders_(sh,CH43_HEADERS);sh.appendRow([new Date(),clean_(d.classNo),clean_(d.seatNo),clean_(d.studentName),number_(d.score??d.formalScore),clean_(d.progress),number_(d.quizScore),boolText_(c.custom),boolText_(c.param),boolText_(c.return),boolText_(c.practice),boolText_(c.challenge),clean_(d.reflection),safeJson_(c),safeJson_(d)]);SpreadsheetApp.flush();return json_({ok:true,action:'saveCh04_3',sheet:CH43_SHEET,message:'CH4-3 學習成果已寫入 Google 試算表'});}
