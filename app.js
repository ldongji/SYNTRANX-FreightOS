const STORAGE_KEY = "xc_shipping_receivables_v1";
const UI_STORAGE_KEY = "xc_shipping_ui_v1";

const SHIPMENT_STATUS_OPTIONS = ["新货入仓", "已出仓", "转运中", "到达目的", "清关中", "分拣中", "派送中", "已签收"];
const ORIGIN_OPERATION_STATUSES = ["新货入仓", "已出仓", "转运中", "到达目的"];
const DESTINATION_OPERATION_STATUSES = ["清关中", "分拣中", "派送中", "已签收"];

const APPROVED_ACCOUNT_NAMES = [
  "DXB现金",
  "DXB公司账号",
  "DXB个人账号",
  "GZ公司公账",
  "GZ公账扫码",
  "BG银行账号",
  "BG支付宝",
  "BG微信",
  "TR银行账号",
  "TR支付宝",
  "TR微信",
  "MD银行账户",
  "MD支付宝",
  "MD微信",
  "QT业务往来冲账",
  "QT坏账核销",
  "QT内部资金调拨",
];

const ACCOUNT_NAME_ALIASES = {
  目的地现金收支: "DXB现金",
  目的地公司银行账号收支: "DXB公司账号",
  目的地个人银行账号收支: "DXB个人账号",
  始发地公司公账: "GZ公司公账",
  公司公账: "GZ公司公账",
  公账扫码: "GZ公账扫码",
  B银行账号: "BG银行账号",
  B支付宝: "BG支付宝",
  B微信: "BG微信",
  T银行账号: "TR银行账号",
  T支付宝: "TR支付宝",
  T微信: "TR微信",
  M银行账户: "MD银行账户",
  M支付宝: "MD支付宝",
  M微信: "MD微信",
  业务往来对冲: "QT业务往来冲账",
  业务往来冲账: "QT业务往来冲账",
  坏账核销: "QT坏账核销",
  内部资金调拨: "QT内部资金调拨",
  资金调拨: "QT内部资金调拨",
};

const seed = {
  options: {
    channels: ["天龙", "海秦HQ", "极航", "赛时", "三羊", "迅捷", "阳光货运", "一腾", "众米纳"],
    origins: ["广州GZ", "深圳SZ", "义乌YW", "香港HK", "中国CN"],
    destinations: ["迪拜DXB", "沙特KSA", "利雅得RUH", "吉达JED", "阿联酋ARE", "伊拉克EBL"],
    modes: ["空运双清AIR", "普通空运AIR", "海运双清SEA", "海空联运SEAAIR", "电商海派AE", "电商海派KSA", "电商空派AE", "电商空派KSA"],
    lastMiles: ["TERRY", "ALI"],
    terms: ["到付票结DDP", "到付月结DMP", "到付周结DWP", "预付票结PP", "预付周结PW", "预付月结PM"],
    shipmentStatus: SHIPMENT_STATUS_OPTIONS,
    paymentAccounts: APPROVED_ACCOUNT_NAMES,
    paymentSales: ["BINGO", "TERRY", "MIDA"],
    rates: { AED: 1.84, USD: 6.8 },
  },
  shipments: [
    {
      id: "s-demo-1",
      date: "2026-06-04",
      type: "出货",
      channel: "天龙",
      customer: "CYJ",
      mark: "CYJF",
      description: "BAG女包",
      masterNo: "",
      waybill: "BY01000001",
      origin: "广州GZ",
      destination: "迪拜DXB",
      mode: "空运双清AIR",
      ctn: 2,
      weight: 55,
      volumeWeight: 41.59,
      chargeWeight: 55,
      cargoValue: 0,
      unitPrice: 36,
      chargeInsurance: 0,
      chargePickup: 0,
      chargeDelivery: 0,
      chargeDocument: 0,
      chargeRegistration: 0,
      chargeCustoms: 0,
      chargeStorage: 0,
      chargeOther: 0,
      chargeNote: "",
      costUnit: 34,
      costFreight: 0,
      costPickup: 0,
      costDelivery: 0,
      costDocument: 0,
      costRegistration: 0,
      costCustoms: 0,
      costStorage: 0,
      costHandling: 0,
      costInsurance: 0,
      costOther: 0,
      costNote: "",
      terms: "到付月结DMP",
      shipmentStatus: "转运中",
      customsStatus: "清关中",
      flightNo: "TL-DXB",
      lastMile: "TERRY",
      etd: "2026-06-04",
      eta: "2026-06-06",
      deliveryDate: "",
      costStatus: "未结算N/P",
      note: "示例，可删除",
    },
    {
      id: "s-demo-2",
      date: "2026-06-04",
      type: "出货",
      channel: "天龙",
      customer: "HASAN",
      mark: "HASAN1230",
      description: "LCD",
      masterNo: "",
      waybill: "FT04120000",
      origin: "深圳SZ",
      destination: "迪拜DXB",
      mode: "空运双清AIR",
      ctn: 17,
      weight: 194,
      volumeWeight: 141,
      chargeWeight: 194,
      cargoValue: 0,
      unitPrice: 31,
      chargeInsurance: 0,
      chargePickup: 0,
      chargeDelivery: 0,
      chargeDocument: 0,
      chargeRegistration: 0,
      chargeCustoms: 0,
      chargeStorage: 0,
      chargeOther: 0,
      chargeNote: "",
      costUnit: 27,
      costFreight: 0,
      costPickup: 0,
      costDelivery: 0,
      costDocument: 0,
      costRegistration: 0,
      costCustoms: 0,
      costStorage: 0,
      costHandling: 0,
      costInsurance: 0,
      costOther: 0,
      costNote: "",
      terms: "到付票结DDP",
      shipmentStatus: "完成派送",
      customsStatus: "已放行",
      flightNo: "SZ-DXB",
      lastMile: "ALI",
      etd: "2026-06-02",
      eta: "2026-06-04",
      deliveryDate: "2026-06-04",
      costStatus: "已结算PAID",
      note: "示例，可删除",
    },
  ],
  payments: [
    {
      id: "p-demo-1",
      date: "2026-06-04",
      customer: "HASAN",
      waybill: "FT04120000",
      account: "BINGO",
      currency: "AED",
      amount: 3200,
      rate: 1.84,
      receiveAccount: "BG银行账号",
      voucherName: "",
      method: "按运单核销",
      note: "示例，可删除",
    },
  ],
  expenses: [
    {
      id: "e-demo-1",
      date: "2026-06-04",
      category: "房租",
      account: "GZ公司公账",
      amount: 0,
      currency: "RMB",
      rate: 1,
      voucherName: "",
      note: "示例，可删除",
    },
  ],
  profiles: [
    {
      id: "c-demo-1",
      mark: "HASAN1230",
      shipper: "钟总",
      shipperPhone: "",
      receiver: "HASAN",
      receiverPhone: "971566536822",
      address: "Sharjah UAE",
    },
  ],
  accountRequests: [],
  bookings: [],
};

let state = loadState();
migrateShipmentReferences();
normalizeProfiles();
normalizePaymentRates();
normalizeAccountOptions();
normalizeShipmentStatusOptions();
let expenseDrafts = [];
let shipmentDetailsExpanded = false;
let shipmentPage = 1;
let shipmentPageSize = 10;
let selectedCustomerDetail = "";

const els = {
  viewTitle: document.querySelector("#viewTitle"),
  appShell: document.querySelector(".app-shell"),
  sidebarToggle: document.querySelector("#sidebarToggle"),
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  shipmentRows: document.querySelector("#shipmentRows"),
  shipmentTable: document.querySelector("#shipmentTable"),
  toggleShipmentDetailsBtn: document.querySelector("#toggleShipmentDetailsBtn"),
  shipmentPaginationInfo: document.querySelector("#shipmentPaginationInfo"),
  shipmentPageSize: document.querySelector("#shipmentPageSize"),
  shipmentPrevPage: document.querySelector("#shipmentPrevPage"),
  shipmentNextPage: document.querySelector("#shipmentNextPage"),
  originOperationRows: document.querySelector("#originOperationRows"),
  destinationOperationRows: document.querySelector("#destinationOperationRows"),
  completedOperationRows: document.querySelector("#completedOperationRows"),
  manifestRows: document.querySelector("#manifestRows"),
  bookingRows: document.querySelector("#bookingRows"),
  bookingForm: document.querySelector("#bookingForm"),
  bookingCount: document.querySelector("#bookingCount"),
  bookingCtn: document.querySelector("#bookingCtn"),
  bookingWeight: document.querySelector("#bookingWeight"),
  bookingProfit: document.querySelector("#bookingProfit"),
  paymentRows: document.querySelector("#paymentRows"),
  customerRows: document.querySelector("#customerRows"),
  completedCustomerRows: document.querySelector("#completedCustomerRows"),
  customerDetailRows: document.querySelector("#customerDetailRows"),
  customerSearchSuggest: document.querySelector("#customerSearchSuggest"),
  expenseDraftRows: document.querySelector("#expenseDraftRows"),
  expenseRows: document.querySelector("#expenseRows"),
  accountRows: document.querySelector("#accountRows"),
  accountRequestRows: document.querySelector("#accountRequestRows"),
  profileRows: document.querySelector("#profileRows"),
  openShipmentRows: document.querySelector("#openShipmentRows"),
  customerBars: document.querySelector("#customerBars"),
  dashboardAgingStrip: document.querySelector("#dashboardAgingStrip"),
  dashboardProfitRank: document.querySelector("#dashboardProfitRank"),
  dashboardRiskCustomers: document.querySelector("#dashboardRiskCustomers"),
  agingBucketCards: document.querySelector("#agingBucketCards"),
  agingRows: document.querySelector("#agingRows"),
  riskSummaryCards: document.querySelector("#riskSummaryCards"),
  riskCustomerRows: document.querySelector("#riskCustomerRows"),
  customerProfitRank: document.querySelector("#customerProfitRank"),
  shipmentProfitRank: document.querySelector("#shipmentProfitRank"),
  customerUpgradeCards: document.querySelector("#customerUpgradeCards"),
  expenseBars: document.querySelector("#expenseBars"),
  opsStages: document.querySelector("#opsStages"),
  shipmentDialog: document.querySelector("#shipmentDialog"),
  trackingDialog: document.querySelector("#trackingDialog"),
  trackingForm: document.querySelector("#trackingForm"),
  trackingSummary: document.querySelector("#trackingSummary"),
  trackingHistoryRows: document.querySelector("#trackingHistoryRows"),
  podDialog: document.querySelector("#podDialog"),
  podForm: document.querySelector("#podForm"),
  podSummary: document.querySelector("#podSummary"),
  podRecordRows: document.querySelector("#podRecordRows"),
  podFileInput: document.querySelector("#podFileInput"),
  podFileStatus: document.querySelector("#podFileStatus"),
  podPreviewDialog: document.querySelector("#podPreviewDialog"),
  podPreviewImage: document.querySelector("#podPreviewImage"),
  cargoLinesBody: document.querySelector("#cargoLinesBody"),
  cargoTotalCtn: document.querySelector("#cargoTotalCtn"),
  cargoTotalActual: document.querySelector("#cargoTotalActual"),
  cargoTotalVolume: document.querySelector("#cargoTotalVolume"),
  cargoTotalCharge: document.querySelector("#cargoTotalCharge"),
  paymentDialog: document.querySelector("#paymentDialog"),
  customerDialog: document.querySelector("#customerDialog"),
  statementDialog: document.querySelector("#statementDialog"),
  shipmentForm: document.querySelector("#shipmentForm"),
  shipmentReceivableSummary: document.querySelector("#shipmentReceivableSummary"),
  shipmentCostSummary: document.querySelector("#shipmentCostSummary"),
  shipmentProfitSummary: document.querySelector("#shipmentProfitSummary"),
  paymentForm: document.querySelector("#paymentForm"),
  customerForm: document.querySelector("#customerForm"),
  statementForm: document.querySelector("#statementForm"),
  quickShipmentForm: document.querySelector("#quickShipmentForm"),
  quickPaymentForm: document.querySelector("#quickPaymentForm"),
};

function normalizeAccountName(value) {
  const name = String(value || "").trim();
  return ACCOUNT_NAME_ALIASES[name] || name;
}

function accountOptions() {
  return unique((state.options.paymentAccounts || []).map(normalizeAccountName));
}

function isInternalTransferAccount(value) {
  return normalizeAccountName(value) === "QT内部资金调拨";
}

function transferTargetAccountOptions() {
  return accountOptions().filter((account) => !isInternalTransferAccount(account));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(seed);
  try {
    const parsed = JSON.parse(raw);
    return {
      options: { ...seed.options, ...(parsed.options || {}) },
      shipments: parsed.shipments || [],
      payments: parsed.payments || [],
      expenses: parsed.expenses || [],
      profiles: parsed.profiles || [],
      accountRequests: parsed.accountRequests || [],
      bookings: parsed.bookings || [],
    };
  } catch {
    return structuredClone(seed);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeAccountOptions() {
  let changed = false;
  state.payments.forEach((payment) => {
    const normalized = normalizeAccountName(payment.receiveAccount);
    if (payment.receiveAccount !== normalized) changed = true;
    payment.receiveAccount = normalized;
  });
  state.expenses.forEach((expense) => {
    const normalized = normalizeAccountName(expense.account);
    if (expense.account !== normalized) changed = true;
    expense.account = normalized;
    const transferFrom = normalizeAccountName(expense.transferFromAccount);
    if (expense.transferFromAccount !== transferFrom) changed = true;
    expense.transferFromAccount = transferFrom;
    const transferTo = normalizeAccountName(expense.transferToAccount);
    if (expense.transferToAccount !== transferTo) changed = true;
    expense.transferToAccount = transferTo;
  });
  const before = JSON.stringify(state.options.paymentAccounts || []);
  state.options.paymentAccounts = unique([
    ...APPROVED_ACCOUNT_NAMES,
    ...(state.options.paymentAccounts || []).map(normalizeAccountName),
  ]).filter((account) => APPROVED_ACCOUNT_NAMES.includes(account) || state.accountRequests?.some((request) => request.status === "approved" && request.accountName === account));
  if (before !== JSON.stringify(state.options.paymentAccounts || [])) changed = true;
  if (changed) saveState();
}

function normalizeShipmentStatusOptions() {
  const before = JSON.stringify(state.options.shipmentStatus || []);
  let changed = false;
  state.options.shipmentStatus = SHIPMENT_STATUS_OPTIONS;
  state.shipments.forEach((shipment) => {
    if (shipment.shipmentStatus === "到达目的地") {
      shipment.shipmentStatus = "到达目的";
      changed = true;
    }
    if (shipment.shipmentStatus === "待清关") {
      shipment.shipmentStatus = "清关中";
      changed = true;
    }
    if (shipment.shipmentStatus === "完成派送") {
      shipment.shipmentStatus = "已签收";
      changed = true;
    }
    if (!Array.isArray(shipment.statusHistory)) {
      shipment.statusHistory = [];
      changed = true;
    }
    if (!Array.isArray(shipment.podRecords)) {
      shipment.podRecords = [];
      changed = true;
    }
  });
  if (before !== JSON.stringify(state.options.shipmentStatus || [])) changed = true;
  if (changed) saveState();
}

function normalizeProfiles() {
  let changed = false;
  state.profiles.forEach((profile) => {
    if (!profile.shipper && profile.receiver) {
      profile.shipper = profile.receiver;
      changed = true;
    }
  });
  if (changed) saveState();
}

function normalizePaymentRates() {
  let changed = false;
  state.payments.forEach((payment) => {
    if (payment.currency === "AED" && (!payment.rate || number(payment.rate) === 1.96)) {
      payment.rate = 1.84;
      changed = true;
    }
    if (payment.currency === "USD" && !payment.rate) {
      payment.rate = 6.8;
      changed = true;
    }
    if (payment.currency === "RMB" && !payment.rate) {
      payment.rate = 1;
      changed = true;
    }
  });
  if (changed) saveState();
}

function loadUiState() {
  try {
    return JSON.parse(localStorage.getItem(UI_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveUiState(nextState) {
  localStorage.setItem(UI_STORAGE_KEY, JSON.stringify(nextState));
}

function applySidebarState(collapsed) {
  els.appShell.classList.toggle("sidebar-collapsed", collapsed);
  els.sidebarToggle.title = collapsed ? "展开侧边栏" : "收起侧边栏";
}

function toggleSidebar() {
  const collapsed = !els.appShell.classList.contains("sidebar-collapsed");
  applySidebarState(collapsed);
  saveUiState({ ...loadUiState(), sidebarCollapsed: collapsed });
}

function money(value) {
  return Number(value || 0).toLocaleString("zh-CN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function number(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

const MONEY_KEYS = [
  "unitPrice",
  "chargeInsurance",
  "chargePickup",
  "chargeDelivery",
  "chargeDocument",
  "chargeRegistration",
  "chargeCustoms",
  "chargeStorage",
  "chargeOther",
  "costFreight",
  "costPickup",
  "costDelivery",
  "costDocument",
  "costRegistration",
  "costCustoms",
  "costStorage",
  "costHandling",
  "costInsurance",
  "costOther",
];

function moneyFieldDefaults() {
  const rates = state?.options?.rates || seed.options.rates || {};
  return {
    aedRate: number(rates.AED) || 1.84,
    usdRate: number(rates.USD) || 6.8,
    ...Object.fromEntries(MONEY_KEYS.map((key) => [`${key}Currency`, "RMB"])),
  };
}

function currencyRate(record, currency) {
  if (currency === "AED") return number(record.aedRate) || number(state?.options?.rates?.AED) || 1.84;
  if (currency === "USD") return number(record.usdRate) || number(state?.options?.rates?.USD) || 6.8;
  return 1;
}

function amountFromRmb(record, amount, currency = "RMB") {
  const rate = currencyRate(record, currency);
  return rate ? number(amount) / rate : number(amount);
}

function rememberShipmentRates(data) {
  state.options.rates = {
    AED: number(data.aedRate) || number(state.options.rates?.AED) || 1.84,
    USD: number(data.usdRate) || number(state.options.rates?.USD) || 6.8,
  };
}

function amountInRmb(record, key) {
  return number(record[key]) * currencyRate(record, record[`${key}Currency`] || "RMB");
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function id(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function recordIdTime(record) {
  const match = String(record?.id || "").match(/^[a-z]+-(\d{10,})-/i);
  return match ? Number(match[1]) : 0;
}

function trailingNumber(value) {
  const match = String(value || "").match(/(\d+)(?!.*\d)/);
  return match ? Number(match[1]) : 0;
}

function shipmentRecentValue(shipment) {
  const time = recordIdTime(shipment);
  if (time) return time;
  return Math.max(trailingNumber(shipment.waybill), trailingNumber(shipment.masterNo));
}

function sortShipmentsNewestFirst(a, b) {
  const dateCompare = String(b.date || "").localeCompare(String(a.date || ""));
  if (dateCompare) return dateCompare;
  const recentCompare = shipmentRecentValue(b) - shipmentRecentValue(a);
  if (recentCompare) return recentCompare;
  return String(b.waybill || b.masterNo || "").localeCompare(String(a.waybill || a.masterNo || ""));
}

function fieldList(form) {
  return [...form.querySelectorAll('input:not([type="hidden"]), select, textarea')]
    .filter((el) => !el.disabled && el.offsetParent !== null);
}

function gridColumnCount(element) {
  const grid = element.closest(".form-grid, .quick-grid, .cost-grid");
  if (!grid) return 1;
  const columns = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean);
  return Math.max(1, columns.length || 1);
}

function moveFormFocus(form, current, offset) {
  const fields = fieldList(form);
  const index = fields.indexOf(current);
  if (index < 0) return;
  const next = fields[index + offset];
  if (!next) return;
  next.focus();
  if (typeof next.select === "function" && next.tagName !== "SELECT") next.select();
}

function shouldMoveHorizontally(event) {
  const target = event.target;
  if (target.tagName === "SELECT" || target.type === "date") return true;
  if (target.selectionStart === null || target.selectionEnd === null) return true;
  if (event.key === "ArrowLeft") return target.selectionStart === 0 && target.selectionEnd === 0;
  if (event.key === "ArrowRight") return target.selectionStart === target.value.length && target.selectionEnd === target.value.length;
  return true;
}

function handleFormNavigationKeys(form, event) {
  if (!event.target.matches("input, select, textarea")) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "Enter") {
    event.preventDefault();
    moveFormFocus(form, event.target, 1);
    return;
  }
  if (event.key === "ArrowLeft" && shouldMoveHorizontally(event)) {
    event.preventDefault();
    moveFormFocus(form, event.target, -1);
  }
  if (event.key === "ArrowRight" && shouldMoveHorizontally(event)) {
    event.preventDefault();
    moveFormFocus(form, event.target, 1);
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    moveFormFocus(form, event.target, -gridColumnCount(event.target));
  }
  if (event.key === "ArrowDown") {
    event.preventDefault();
    moveFormFocus(form, event.target, gridColumnCount(event.target));
  }
}

function handleShipmentFormKeys(event) {
  handleFormNavigationKeys(event.currentTarget, event);
}

function handleAnyFormKeys(event) {
  if (event.defaultPrevented) return;
  if (!event.target.matches("input, select, textarea")) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const form = event.target.closest("form");
  if (!form) return;
  handleFormNavigationKeys(form, event);
}

function expenseDraftFields() {
  return [...els.expenseDraftRows.querySelectorAll('input, select')]
    .filter((el) => !el.disabled && el.offsetParent !== null);
}

function moveExpenseDraftFocus(current, offset) {
  const fields = expenseDraftFields();
  const index = fields.indexOf(current);
  if (index < 0) return;
  const next = fields[index + offset];
  if (!next) return;
  next.focus();
  if (typeof next.select === "function" && next.tagName !== "SELECT") next.select();
}

function expenseDraftColumnCount() {
  const firstRow = els.expenseDraftRows.querySelector("tr[data-expense-draft]");
  if (!firstRow) return 1;
  return firstRow.querySelectorAll("input, select").length || 1;
}

function handleExpenseDraftKeys(event) {
  if (!event.target.matches("input, select")) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const moves = {
    Enter: 1,
    ArrowRight: 1,
    ArrowLeft: -1,
    ArrowDown: expenseDraftColumnCount(),
    ArrowUp: -expenseDraftColumnCount(),
  };
  if (!(event.key in moves)) return;
  event.preventDefault();
  moveExpenseDraftFocus(event.target, moves[event.key]);
}

function receivable(s) {
  return baseFreightReceivable(s) + extraReceivable(s);
}

function baseFreightReceivable(s) {
  return number(s.chargeWeight) * amountInRmb(s, "unitPrice");
}

function extraReceivable(s) {
  return [
    "chargeInsurance",
    "chargePickup",
    "chargeDelivery",
    "chargeDocument",
    "chargeRegistration",
    "chargeCustoms",
    "chargeStorage",
    "chargeOther",
  ].reduce((sum, key) => sum + amountInRmb(s, key), 0);
}

function cost(s) {
  const freightCost = amountInRmb(s, "costFreight") * number(s.chargeWeight);
  const detailTotal = [
    "costPickup",
    "costDelivery",
    "costDocument",
    "costRegistration",
    "costCustoms",
    "costStorage",
    "costHandling",
    "costInsurance",
    "costOther",
  ].reduce((sum, key) => sum + amountInRmb(s, key), 0);
  return freightCost + detailTotal;
}

function updateShipmentCostSummary() {
  if (!els.shipmentForm) return;
  const data = formToObject(els.shipmentForm);
  const receivableTotal = receivable(data);
  const costTotal = cost(data);
  const profitTotal = receivableTotal - costTotal;
  if (els.shipmentReceivableSummary) els.shipmentReceivableSummary.textContent = money(receivableTotal);
  if (els.shipmentCostSummary) els.shipmentCostSummary.textContent = money(costTotal);
  if (els.shipmentProfitSummary) {
    els.shipmentProfitSummary.textContent = money(profitTotal);
    els.shipmentProfitSummary.classList.toggle("negative", profitTotal < -0.009);
    els.shipmentProfitSummary.classList.toggle("positive", profitTotal > 0.009);
  }
}

function paymentRmb(p) {
  return number(p.amount) * (number(p.rate) || 1);
}

const CURRENCY_OPTIONS = ["RMB", "AED", "USD", "EUR", "GBP", "SAR", "HKD", "JPY", "KRW", "SGD", "MYR", "THB", "CAD", "AUD", "NZD", "CHF", "CNY"];
const EXPENSE_MARKET_RATES_KEY = "xc_expense_market_rates_v1";

let expenseMarketRates = loadExpenseMarketRates();

function loadExpenseMarketRates() {
  try {
    return JSON.parse(localStorage.getItem(EXPENSE_MARKET_RATES_KEY) || "null") || {};
  } catch {
    return {};
  }
}

function saveExpenseMarketRates(rates) {
  expenseMarketRates = rates || {};
  try {
    localStorage.setItem(EXPENSE_MARKET_RATES_KEY, JSON.stringify(expenseMarketRates));
  } catch {
    // 本地缓存失败不影响手动录入。
  }
}

function defaultPaymentRate(currency) {
  if (currency === "AED") return number(state.options.rates?.AED) || 1.84;
  if (currency === "USD") return number(state.options.rates?.USD) || 6.8;
  return 1;
}

function marketExpenseRate(currency) {
  if (currency === "RMB" || currency === "CNY") return 1;
  if (expenseMarketRates.date === today() && expenseMarketRates.rates?.[currency]) {
    return number(expenseMarketRates.rates[currency]);
  }
  return 0;
}

function defaultExpenseRate(currency) {
  const marketRate = marketExpenseRate(currency);
  if (marketRate) return marketRate;
  if (currency === "AED") return number(state.options.rates?.AED) || 1.84;
  if (currency === "USD") return number(state.options.rates?.USD) || 6.8;
  return 1;
}

function updateExpenseMarketRateHint(status, text) {
  const hint = document.querySelector("#expenseRateHint");
  if (!hint) return;
  hint.textContent = text;
  hint.dataset.status = status;
}

function applyMarketRatesToExpenseDrafts(force = false) {
  els.expenseDraftRows?.querySelectorAll("tr[data-expense-draft]").forEach((row) => {
    const currency = row.querySelector('[name="currency"]')?.value || "RMB";
    const rateInput = row.querySelector('[name="rate"]');
    if (!rateInput) return;
    const fallback = defaultExpenseRate(currency);
    const current = number(rateInput.value);
    const shouldUpdate = force || !rateInput.value || current === 1 || current === 1.84 || current === 6.8;
    if (shouldUpdate) rateInput.value = String(fallback);
  });
}

async function refreshExpenseMarketRates() {
  if (!window.fetch) {
    updateExpenseMarketRateHint("fallback", "当前浏览器不支持自动汇率，可手动填写。");
    return;
  }
  updateExpenseMarketRateHint("loading", "正在匹配当天市场汇率...");
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/CNY", { cache: "no-store" });
    if (!response.ok) throw new Error("rate request failed");
    const data = await response.json();
    if (data.result && data.result !== "success") throw new Error("rate response failed");
    const apiRates = data.rates || {};
    const rates = { RMB: 1, CNY: 1 };
    CURRENCY_OPTIONS.forEach((currency) => {
      if (currency === "RMB" || currency === "CNY") return;
      const apiRate = number(apiRates[currency]);
      if (apiRate > 0) rates[currency] = Number((1 / apiRate).toFixed(4));
    });
    saveExpenseMarketRates({ date: today(), source: "open.er-api.com", rates });
    applyMarketRatesToExpenseDrafts(true);
    updateExpenseMarketRateHint("live", `已按今日市场汇率自动匹配（${today()}）。`);
  } catch {
    if (expenseMarketRates.date) {
      applyMarketRatesToExpenseDrafts();
      updateExpenseMarketRateHint("fallback", `今日汇率获取失败，暂用 ${expenseMarketRates.date} 的缓存汇率。`);
    } else {
      updateExpenseMarketRateHint("fallback", "今日汇率获取失败，暂用默认汇率，可手动修改。");
    }
  }
}

function expenseRmb(item) {
  return number(item.amount) * (number(item.rate) || defaultExpenseRate(item.currency || "RMB"));
}

function isInternalTransferExpense(item) {
  return isInternalTransferAccount(item.account);
}

function reportExpenseRows() {
  return state.expenses.filter((item) => !isInternalTransferExpense(item));
}

function syncPaymentRate(form) {
  if (!form.rate || !form.currency) return;
  form.rate.value = String(defaultPaymentRate(form.currency.value));
}

function paymentCurrencyForCustomer(customer) {
  const target = normalizeText(customer);
  if (!target) return "RMB";
  const latestPayment = [...state.payments]
    .filter((payment) => normalizeText(payment.customer) === target && payment.currency)
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || String(b.id || "").localeCompare(String(a.id || "")))[0];
  if (latestPayment?.currency) return latestPayment.currency;
  const latestShipment = [...state.shipments]
    .filter((shipment) => normalizeText(shipment.customer) === target && shipment.unitPriceCurrency)
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || String(b.id || "").localeCompare(String(a.id || "")))[0];
  return latestShipment?.unitPriceCurrency || "RMB";
}

function applyPaymentCustomerCurrency(form, force = false) {
  if (!form?.customer || !form?.currency) return;
  const remembered = paymentCurrencyForCustomer(form.customer.value);
  if (force || !form.currency.value || form.currency.value === "RMB") {
    form.currency.value = remembered || "RMB";
    syncPaymentRate(form);
  }
}

function normalizeReference(value) {
  return String(value || "").trim().toLowerCase();
}

function matchesShipmentReference(reference, shipment) {
  const target = normalizeReference(reference);
  if (!target) return false;
  return [shipment.waybill, shipment.masterNo].some((value) => normalizeReference(value) === target);
}

function paidForShipment(shipment, ignorePaymentId = "") {
  const byWaybill = state.payments
    .filter((p) => (!ignorePaymentId || p.id !== ignorePaymentId) && matchesShipmentReference(p.waybill, shipment))
    .reduce((sum, p) => sum + paymentRmb(p), 0);
  const byCustomerOnly = state.payments
    .filter((p) => (!ignorePaymentId || p.id !== ignorePaymentId) && !p.waybill && p.customer === shipment.customer)
    .reduce((sum, p) => sum + paymentRmb(p), 0);
  const customerOpen = state.shipments
    .filter((s) => s.customer === shipment.customer)
    .reduce((sum, s) => sum + receivable(s), 0);
  const share = customerOpen > 0 ? receivable(shipment) / customerOpen : 0;
  return byWaybill + byCustomerOnly * share;
}

function settlement(s, ignorePaymentId = "") {
  const shouldReceive = receivable(s);
  const actualPaid = paidForShipment(s, ignorePaymentId);
  const paid = Math.min(shouldReceive, actualPaid);
  const open = Math.max(0, shouldReceive - paid);
  const status = shouldReceive === 0 ? "未付款N/P" : open <= 0.009 ? "已付款PAID" : paid > 0 ? "有余款" : "未付款N/P";
  return { shouldReceive, paid, actualPaid, open, status, cost: cost(s), profit: shouldReceive - cost(s) };
}

function receivableCurrenciesForShipment(shipment) {
  const currencies = [];
  if (baseFreightReceivable(shipment) > 0) currencies.push(shipment.unitPriceCurrency || "RMB");
  MONEY_KEYS.filter((key) => key.startsWith("charge") && number(shipment[key]) > 0)
    .forEach((key) => currencies.push(shipment[`${key}Currency`] || "RMB"));
  return unique(currencies);
}

function customerLedgerFilters() {
  return {
    startDate: document.querySelector("#customerStartDate")?.value || "",
    endDate: document.querySelector("#customerEndDate")?.value || "",
    month: document.querySelector("#customerMonth")?.value || "",
  };
}

function shipmentMatchesCustomerLedgerFilters(shipment) {
  const { startDate, endDate, month } = customerLedgerFilters();
  const date = shipment.date || "";
  if ((startDate || endDate || month) && !date) return false;
  if (month && String(date).slice(0, 7) !== month) return false;
  if (startDate && date < startDate) return false;
  if (endDate && date > endDate) return false;
  return true;
}

function customerSummary() {
  const map = new Map();
  for (const s of state.shipments) {
    if (!s.customer) continue;
    if (!shipmentMatchesCustomerLedgerFilters(s)) continue;
    const current = map.get(s.customer) || {
      customer: s.customer,
      count: 0,
      receivable: 0,
      paid: 0,
      open: 0,
      currencies: [],
      lastDate: "",
    };
    const st = settlement(s);
    current.count += 1;
    current.receivable += st.shouldReceive;
    current.paid += st.paid;
    current.open += st.open;
    current.currencies = unique([...current.currencies, ...receivableCurrenciesForShipment(s)]);
    current.lastDate = current.lastDate && current.lastDate > s.date ? current.lastDate : s.date;
    map.set(s.customer, current);
  }
  return [...map.values()].sort((a, b) => b.open - a.open);
}

function financeSummary() {
  const biz = state.shipments.reduce((acc, shipment) => {
    const st = settlement(shipment);
    acc.revenue += st.shouldReceive;
    acc.bizCost += st.cost;
    acc.grossProfit += st.profit;
    return acc;
  }, { revenue: 0, bizCost: 0, grossProfit: 0 });
  const expense = reportExpenseRows().reduce((sum, item) => sum + expenseRmb(item), 0);
  return { ...biz, expense, netProfit: biz.grossProfit - expense };
}

function expenseSummary() {
  const map = new Map();
  for (const item of reportExpenseRows()) {
    const key = item.category || "其他";
    map.set(key, (map.get(key) || 0) + expenseRmb(item));
  }
  return [...map.entries()]
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount);
}


function dateAgeDays(dateValue) {
  if (!dateValue) return 0;
  const start = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(start.getTime())) return 0;
  const end = new Date(`${today()}T00:00:00`);
  return Math.max(0, Math.floor((end - start) / 86400000));
}

const AGING_BUCKETS = [
  { key: "0-7", label: "0-7天", min: 0, max: 7 },
  { key: "8-15", label: "8-15天", min: 8, max: 15 },
  { key: "16-30", label: "16-30天", min: 16, max: 30 },
  { key: "31-60", label: "31-60天", min: 31, max: 60 },
  { key: "60+", label: "60天以上", min: 61, max: Infinity },
];

function agingBucketForDays(days) {
  return AGING_BUCKETS.find((bucket) => days >= bucket.min && days <= bucket.max) || AGING_BUCKETS[0];
}

function openShipmentSettlements() {
  return state.shipments
    .map((shipment) => {
      const st = settlement(shipment);
      const ageDays = dateAgeDays(shipment.date);
      const bucket = agingBucketForDays(ageDays);
      return { ...shipment, ...st, ageDays, agingBucket: bucket.key, agingLabel: bucket.label };
    })
    .filter((row) => row.open > 0.009)
    .sort((a, b) => b.ageDays - a.ageDays || b.open - a.open);
}

function agingBucketSummary() {
  const summary = AGING_BUCKETS.map((bucket) => ({ ...bucket, amount: 0, count: 0, customers: new Set() }));
  const map = new Map(summary.map((bucket) => [bucket.key, bucket]));
  openShipmentSettlements().forEach((row) => {
    const bucket = map.get(row.agingBucket);
    if (!bucket) return;
    bucket.amount += row.open;
    bucket.count += 1;
    if (row.customer) bucket.customers.add(row.customer);
  });
  return summary.map((bucket) => ({ ...bucket, customerCount: bucket.customers.size }));
}

function customerPerformanceSummary() {
  const map = new Map();
  for (const shipment of state.shipments) {
    if (!shipment.customer) continue;
    if (!shipmentMatchesCustomerLedgerFilters(shipment)) continue;
    const st = settlement(shipment);
    const current = map.get(shipment.customer) || {
      customer: shipment.customer,
      count: 0,
      receivable: 0,
      paid: 0,
      open: 0,
      profit: 0,
      maxAgeDays: 0,
      overdueAmount: 0,
      lastDate: "",
      currencies: [],
    };
    const ageDays = st.open > 0.009 ? dateAgeDays(shipment.date) : 0;
    current.count += 1;
    current.receivable += st.shouldReceive;
    current.paid += st.paid;
    current.open += st.open;
    current.profit += st.profit;
    current.maxAgeDays = Math.max(current.maxAgeDays, ageDays);
    if (ageDays > 30) current.overdueAmount += st.open;
    current.lastDate = current.lastDate && current.lastDate > shipment.date ? current.lastDate : shipment.date;
    current.currencies = unique([...current.currencies, ...receivableCurrenciesForShipment(shipment)]);
    map.set(shipment.customer, current);
  }
  return [...map.values()].map((customer) => ({
    ...customer,
    collectionRate: customer.receivable > 0 ? customer.paid / customer.receivable : 0,
  })).sort((a, b) => b.open - a.open);
}

function enhancedRiskLevel(customer) {
  if (customer.open <= 0.009) return "正常";
  if (customer.maxAgeDays > 60 || customer.open >= 50000 || customer.collectionRate < 0.25) return "高风险";
  if (customer.maxAgeDays > 30 || customer.open >= 10000 || customer.collectionRate < 0.65) return "需跟进";
  return "低风险";
}

function riskSuggestion(customer) {
  const level = enhancedRiskLevel(customer);
  if (level === "高风险") return "暂停放货/老板确认授信";
  if (level === "需跟进") return "48小时内催收并复核账单";
  if (customer.open > 0) return "正常提醒回款";
  return "保持合作";
}

function customerProfitRanking() {
  return customerPerformanceSummary().sort((a, b) => b.profit - a.profit);
}

function shipmentProfitRanking() {
  return state.shipments
    .map((shipment) => ({ ...shipment, ...settlement(shipment) }))
    .sort((a, b) => b.profit - a.profit);
}

function percent(value) {
  return `${Math.round(number(value) * 100)}%`;
}

function riskLevel(customer) {
  if (customer.open <= 0) return "正常";
  const ratio = customer.receivable > 0 ? customer.open / customer.receivable : 0;
  if (customer.open >= 50000 || ratio >= 0.75) return "高风险";
  if (customer.open >= 10000 || ratio >= 0.35) return "需跟进";
  return "低风险";
}

function paymentStatusClass(status) {
  if (status === "已付款PAID") return "paid";
  if (status === "有余款") return "balance";
  return "open";
}

function profitState(profit) {
  if (profit < -0.009) return { className: "loss", label: "亏损" };
  if (profit > 0.009) return { className: "profit", label: "盈利" };
  return { className: "flat", label: "持平" };
}

function unique(values) {
  return [...new Set(values.filter(Boolean).map((v) => String(v).trim()).filter(Boolean))];
}

function refreshOptions() {
  const customers = unique([
    ...state.shipments.map((s) => s.customer),
    ...state.payments.map((p) => p.customer),
    ...state.profiles.map((p) => p.receiver),
    ...state.profiles.map((p) => p.shipper),
  ]);
  const marks = unique([...state.shipments.map((s) => s.mark), ...state.profiles.map((p) => p.mark)]);
  const waybills = unique([...state.shipments.map((s) => s.waybill), ...state.shipments.map((s) => s.masterNo)]);
  const masterNos = unique(state.shipments.map((s) => s.masterNo));
  const descriptions = unique(state.shipments.map((s) => s.description));
  const flightNos = unique(state.shipments.map((s) => s.flightNo));
  const lastMiles = unique([...(state.options.lastMiles || []), ...state.shipments.map((s) => s.lastMile)]);
  const paymentAccounts = accountOptions();
  const expensePaymentAccounts = paymentAccounts.filter((account) => !isInternalTransferAccount(account));
  const paymentSales = unique([
    ...(state.options.paymentSales || []),
    ...state.payments.map((p) => p.account),
    ...state.shipments.map((s) => s.salesPerson),
  ]);
  const lists = {
    channelList: state.options.channels,
    customerList: customers,
    markList: marks,
    originList: state.options.origins,
    destinationList: state.options.destinations,
    modeList: state.options.modes,
    termsList: state.options.terms,
    shipmentStatusList: state.options.shipmentStatus,
    waybillList: waybills,
    masterNoList: masterNos,
    descriptionList: descriptions,
    flightNoList: flightNos,
    lastMileList: lastMiles,
    paymentAccountList: paymentAccounts,
    expensePaymentAccountList: expensePaymentAccounts,
    transferTargetAccountList: transferTargetAccountOptions(),
    paymentSalesList: paymentSales,
  };
  Object.entries(lists).forEach(([idName, values]) => {
    const list = document.getElementById(idName);
    list.innerHTML = values.map((v) => `<option value="${escapeHtml(v)}"></option>`).join("");
  });
  document.querySelectorAll('input[name="receiveAccount"]').forEach((input) => {
    const current = normalizeAccountName(input.value);
    input.value = paymentAccounts.includes(current) ? current : input.value;
  });
  document.querySelector("[name='channels']").value = state.options.channels.join("、");
  document.querySelector("[name='destinations']").value = state.options.destinations.join("、");
  document.querySelector("[name='modes']").value = state.options.modes.join("、");
  document.querySelector("[name='lastMiles']").value = (state.options.lastMiles || []).join("、");
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[ch]);
}

function render() {
  refreshOptions();
  setQuickDefaults();
  updateDatePlaceholders();
  ensureExpenseDrafts();
  renderExpenseDrafts();
  renderMetrics();
  renderAgingAnalysis();
  renderRiskCustomers();
  renderProfitRank();
  renderOperations();
  renderAirlineOperations();
  renderBookings();
  renderShipments();
  renderPayments();
  renderCustomers();
  renderFinance();
  renderAccounts();
  renderAccountRequests();
  renderProfiles();
}

function updateDatePlaceholders() {
  document.querySelectorAll('.date-field input[type="date"]').forEach((input) => {
    input.classList.toggle("has-value", !!input.value);
  });
}

function setQuickDefaults() {
  if (!els.quickShipmentForm.date.value) els.quickShipmentForm.date.value = today();
  if (!els.quickShipmentForm.unitPriceCurrency.value) els.quickShipmentForm.unitPriceCurrency.value = "RMB";
  if (!els.quickShipmentForm.shipmentStatus.value) els.quickShipmentForm.shipmentStatus.value = "新货入仓";
  if (!els.quickShipmentForm.terms.value) els.quickShipmentForm.terms.value = "到付票结DDP";
  if (!els.quickPaymentForm.date.value) els.quickPaymentForm.date.value = today();
  if (!els.quickPaymentForm.currency.value) els.quickPaymentForm.currency.value = "RMB";
  if (!els.quickPaymentForm.rate.value) els.quickPaymentForm.rate.value = 1;
  if (els.bookingForm && !els.bookingForm.date.value) els.bookingForm.date.value = today();
  applyPaymentCustomerCurrency(els.quickPaymentForm);
  syncPaymentRate(els.quickPaymentForm);
}

function blankExpenseDraft() {
  return { id: id("ed"), date: today(), category: "日常报销", account: "", amount: "", currency: "RMB", rate: 1, note: "", voucherName: "" };
}

function ensureExpenseDrafts() {
  if (!expenseDrafts.length) {
    expenseDrafts = [blankExpenseDraft(), blankExpenseDraft(), blankExpenseDraft()];
  }
}

function expenseCategoryOptions(selected) {
  const categories = ["日常报销", "员工工资", "五险一金", "员工福利", "奖金", "提成", "房租", "水电费", "办公用品", "差旅交通", "招待费", "聚餐", "团队活动费用", "通讯网络", "税费", "其他"];
  return categories.map((category) => `<option ${category === selected ? "selected" : ""}>${escapeHtml(category)}</option>`).join("");
}

function currencyOptions(selected = "RMB") {
  return CURRENCY_OPTIONS.map((currency) => `<option ${currency === selected ? "selected" : ""}>${escapeHtml(currency)}</option>`).join("");
}

function renderExpenseDrafts() {
  els.expenseDraftRows.innerHTML = expenseDrafts.map((draft) => {
    return `
    <tr data-expense-draft="${draft.id}">
      <td class="date-cell"><input name="date" type="date" value="${escapeHtml(draft.date)}"></td>
      <td class="category-cell"><select name="category">${expenseCategoryOptions(draft.category)}</select></td>
      <td class="account-cell"><input name="account" list="expensePaymentAccountList" value="${escapeHtml(normalizeAccountName(draft.account))}" placeholder="输入DXB/BG/TR选择账号"></td>
      <td class="amount-cell"><input name="amount" type="number" step="0.01" min="0" value="${escapeHtml(draft.amount)}"></td>
      <td class="currency-cell"><select name="currency">${currencyOptions(draft.currency || "RMB")}</select></td>
      <td class="rate-cell"><input name="rate" type="number" step="0.0001" min="0" value="${escapeHtml(draft.rate || defaultExpenseRate(draft.currency || "RMB"))}"></td>
      <td class="voucher-cell"><input name="voucherFile" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"></td>
      <td class="note-cell"><input name="note" value="${escapeHtml(draft.note)}" placeholder="例如：办公室6月租金"></td>
      <td class="remove-cell"><button type="button" title="删除此行" data-remove-expense-draft="${draft.id}">删</button></td>
    </tr>
  `;
  }).join("");
  applyMarketRatesToExpenseDrafts();
}

function syncExpenseDraftsFromDom() {
  expenseDrafts = [...els.expenseDraftRows.querySelectorAll("tr[data-expense-draft]")].map((row) => ({
    id: row.dataset.expenseDraft,
    date: row.querySelector('[name="date"]').value || today(),
    category: row.querySelector('[name="category"]').value || "其他",
    account: row.querySelector('[name="account"]').value || "",
    amount: row.querySelector('[name="amount"]').value || "",
    currency: row.querySelector('[name="currency"]').value || "RMB",
    rate: row.querySelector('[name="rate"]').value || defaultExpenseRate(row.querySelector('[name="currency"]').value || "RMB"),
    voucherName: row.querySelector('[name="voucherFile"]')?.files?.[0]?.name || "",
    note: row.querySelector('[name="note"]').value || "",
  }));
}

function renderMetrics() {
  const totals = state.shipments.reduce((acc, s) => {
    const st = settlement(s);
    acc.receivable += st.shouldReceive;
    acc.paid += st.paid;
    acc.open += st.open;
    acc.profit += st.profit;
    return acc;
  }, { receivable: 0, paid: 0, open: 0, profit: 0 });
  document.querySelector("#totalReceivable").textContent = money(totals.receivable);
  document.querySelector("#totalPaid").textContent = money(totals.paid);
  document.querySelector("#totalOpen").textContent = money(totals.open);
  document.querySelector("#totalProfit").textContent = money(totals.profit);
  const performanceRows = customerPerformanceSummary();
  const overdueCount = performanceRows.filter((customer) => customer.open > 0.009 && customer.maxAgeDays > 30).length;
  const collectionRate = totals.receivable > 0 ? totals.paid / totals.receivable : 0;
  document.querySelector("#overdueCustomerCount").textContent = overdueCount;
  document.querySelector("#collectionRate").textContent = percent(collectionRate);

  const stageDefs = [
    ["待入仓", ["新货入仓"]],
    ["运输中", ["今天航班", "明天航班", "航班待更新", "转运中", "IN TRANSIT"]],
    ["待清关", ["待清关", "清关中"]],
    ["待派送", ["派送中", "到达目的地"]],
    ["已签收", ["完成派送"]],
    ["异常件", ["异常", "资料待补"]],
  ];
  els.opsStages.innerHTML = stageDefs.map(([label, keys]) => {
    const count = state.shipments.filter((s) => {
      const current = `${s.shipmentStatus || ""} ${s.customsStatus || ""}`;
      return keys.some((key) => current.includes(key));
    }).length;
    return `
      <article class="stage-card">
        <span>${escapeHtml(label)}</span>
        <strong>${count}</strong>
      </article>
    `;
  }).join("");

  const summaries = customerSummary().filter((c) => c.open > 0).slice(0, 8);
  const maxOpen = Math.max(1, ...summaries.map((c) => c.open));
  els.customerBars.innerHTML = summaries.length ? summaries.map((c) => `
    <div class="bar-row">
      <strong>${escapeHtml(c.customer)}</strong>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, c.open / maxOpen * 100)}%"></div></div>
      <span class="money">${money(c.open)}</span>
    </div>
  `).join("") : `<div class="empty">暂无未收款</div>`;

  const openRows = state.shipments
    .map((s) => ({ ...s, ...settlement(s) }))
    .filter((s) => s.open > 0)
    .sort((a, b) => b.open - a.open)
    .slice(0, 10);
  els.openShipmentRows.innerHTML = openRows.length ? openRows.map((s) => `
    <tr>
      <td>${escapeHtml(s.customer)}</td>
      <td>${escapeHtml(s.waybill)}</td>
      <td class="money">${money(s.open)}</td>
      <td><span class="status ${paymentStatusClass(s.status)}">${escapeHtml(s.status)}</span></td>
    </tr>
  `).join("") : `<tr><td colspan="4" class="empty">暂无待跟进业务</td></tr>`;

  renderDashboardInsights();
}

function renderDashboardInsights() {
  if (els.dashboardAgingStrip) {
    const buckets = agingBucketSummary();
    const totalOpen = buckets.reduce((sum, bucket) => sum + bucket.amount, 0) || 1;
    els.dashboardAgingStrip.innerHTML = buckets.map((bucket) => `
      <article class="aging-segment">
        <span>${escapeHtml(bucket.label)}</span>
        <strong>${money(bucket.amount)}</strong>
        <em>${bucket.count}票 · ${percent(bucket.amount / totalOpen)}</em>
      </article>
    `).join("");
  }

  if (els.dashboardProfitRank) {
    const rows = customerProfitRanking().slice(0, 5);
    els.dashboardProfitRank.innerHTML = rows.length ? rows.map((row, index) => `
      <div class="mini-rank-row">
        <b>${index + 1}</b><span>${escapeHtml(row.customer)}</span><strong class="money">${money(row.profit)}</strong>
      </div>
    `).join("") : `<div class="empty">暂无利润数据</div>`;
  }

  if (els.dashboardRiskCustomers) {
    const rows = customerPerformanceSummary()
      .filter((row) => row.open > 0.009)
      .sort((a, b) => b.maxAgeDays - a.maxAgeDays || b.open - a.open)
      .slice(0, 5);
    els.dashboardRiskCustomers.innerHTML = rows.length ? rows.map((row, index) => `
      <div class="mini-rank-row danger">
        <b>${index + 1}</b><span>${escapeHtml(row.customer)} · ${escapeHtml(enhancedRiskLevel(row))}</span><strong class="money">${money(row.open)}</strong>
      </div>
    `).join("") : `<div class="empty">暂无风险客户</div>`;
  }
}

function operationSide(status) {
  return DESTINATION_OPERATION_STATUSES.includes(status) ? "destination" : "origin";
}

function nextOperationStatus(status, side) {
  const originFlow = ORIGIN_OPERATION_STATUSES;
  const destinationFlow = DESTINATION_OPERATION_STATUSES;
  const flow = side === "destination" ? destinationFlow : originFlow;
  const currentIndex = flow.indexOf(status);
  if (side === "origin" && currentIndex === originFlow.length - 1) return destinationFlow[0];
  if (currentIndex >= 0 && currentIndex < flow.length - 1) return flow[currentIndex + 1];
  return status || flow[0];
}

function renderOperations() {
  if (!els.originOperationRows || !els.destinationOperationRows) return;
  const enriched = state.shipments
    .map((shipment) => ({ ...shipment, ...settlement(shipment) }))
    .sort(sortShipmentsNewestFirst);
  const completedRows = enriched.filter((shipment) => shipment.shipmentStatus === DESTINATION_OPERATION_STATUSES[DESTINATION_OPERATION_STATUSES.length - 1]).slice(0, 12);
  const originRows = enriched.filter((shipment) => operationSide(shipment.shipmentStatus || "新货入仓") === "origin").slice(0, 12);
  const destinationRows = enriched
    .filter((shipment) => operationSide(shipment.shipmentStatus || "新货入仓") === "destination")
    .filter((shipment) => shipment.shipmentStatus !== DESTINATION_OPERATION_STATUSES[DESTINATION_OPERATION_STATUSES.length - 1])
    .slice(0, 12);
  els.originOperationRows.innerHTML = renderOperationRows(originRows, ORIGIN_OPERATION_STATUSES, "origin");
  els.destinationOperationRows.innerHTML = renderOperationRows(destinationRows, DESTINATION_OPERATION_STATUSES, "destination");
  if (els.completedOperationRows) els.completedOperationRows.innerHTML = renderCompletedOperationRows(completedRows);
}

function renderOperationRows(rows, statuses, side) {
  if (!rows.length) return `<div class="empty">暂无${side === "origin" ? "始发地" : "目的地"}待操作货物</div>`;
  return rows.map((shipment) => `
    <div class="operation-item">
      <label class="operation-check" title="勾选后可批量更新">
        <input type="checkbox" data-operation-check="${shipment.id}" data-operation-side="${side}">
      </label>
      <div class="operation-main">
        <div class="operation-topline">
          <div class="operation-meta">
            <strong>${escapeHtml(shipment.customer || shipment.mark || "-")}</strong>
            <span>${escapeHtml(shipment.masterNo || shipment.waybill || "-")}</span>
            <em>${escapeHtml(shipment.destination || "")}</em>
          </div>
          <div class="operation-steps">
            ${statuses.map((status) => `
              <button type="button" class="${shipment.shipmentStatus === status ? "active" : ""}" data-operation-shipment="${shipment.id}" data-operation-status="${escapeHtml(status)}">${escapeHtml(status)}</button>
            `).join("")}
          </div>
        </div>
      </div>
      <div class="operation-status">
        <span class="status-chip">${escapeHtml(shipment.shipmentStatus || "新货入仓")}</span>
        <button type="button" class="text-btn mini" data-shipment-section="${shipment.id}" data-section-target="receivable">应收</button>
        <button type="button" class="text-btn mini" data-shipment-section="${shipment.id}" data-section-target="cost">应付</button>
        <button type="button" class="text-btn mini" data-track-shipment="${shipment.id}">轨迹</button>
        ${side === "destination" ? `<button type="button" class="text-btn mini" data-pod-shipment="${shipment.id}">签收记录</button>` : ""}
      </div>
    </div>
  `).join("");
}

function renderCompletedOperationRows(rows) {
  if (!rows.length) return `<div class="empty">暂无已完成操作货物</div>`;
  return rows.map((shipment) => `
    <div class="operation-item completed">
      <div></div>
      <div class="operation-meta">
        <strong>${escapeHtml(shipment.customer || shipment.mark || "-")}</strong>
        <span>${escapeHtml(shipment.masterNo || shipment.waybill || "-")}</span>
        <em>${escapeHtml(shipment.destination || "")}</em>
      </div>
      <div class="operation-status">
        <span class="status-chip">${escapeHtml(shipment.shipmentStatus || "已签收")}</span>
        <button type="button" class="text-btn mini" data-shipment-section="${shipment.id}" data-section-target="receivable">应收</button>
        <button type="button" class="text-btn mini" data-shipment-section="${shipment.id}" data-section-target="cost">应付</button>
        <button type="button" class="text-btn mini" data-track-shipment="${shipment.id}">轨迹</button>
        <button type="button" class="text-btn mini" data-pod-shipment="${shipment.id}">签收记录</button>
      </div>
    </div>
  `).join("");
}

function updateShipmentOperationStatus(shipmentId, status) {
  const shipment = state.shipments.find((s) => s.id === shipmentId);
  if (!shipment) return;
  shipment.shipmentStatus = status;
  shipment.statusHistory = Array.isArray(shipment.statusHistory) ? shipment.statusHistory : [];
  shipment.statusHistory.push({
    date: today(),
    status,
    note: "操作中心更新",
  });
  saveState();
  render();
}

function bulkUpdateOperationStatus(side, scope) {
  const statusInput = document.querySelector(`#${side}BulkStatus`);
  const noteInput = document.querySelector(`#${side}BulkNote`);
  const status = statusInput?.value || "";
  const note = noteInput?.value || (scope === "selected" ? "操作中心勾选更新到下一环节" : "操作中心批量更新");
  let ids = [];
  if (scope === "selected") {
    ids = [...document.querySelectorAll(`[data-operation-check][data-operation-side="${side}"]:checked`)].map((input) => input.dataset.operationCheck);
  } else {
    ids = state.shipments
      .filter((shipment) => operationSide(shipment.shipmentStatus || "新货入仓") === side)
      .map((shipment) => shipment.id);
  }
  if (!ids.length) {
    alert(scope === "selected" ? "请先勾选要更新的货物。" : "本栏暂无可更新货物。");
    return;
  }
  if (scope === "all" && !confirm(`确认将本栏 ${ids.length} 票货统一更新为「${status}」吗？`)) return;
  state.shipments.forEach((shipment) => {
    if (!ids.includes(shipment.id)) return;
    const nextStatus = scope === "selected" ? nextOperationStatus(shipment.shipmentStatus || (side === "destination" ? DESTINATION_OPERATION_STATUSES[0] : ORIGIN_OPERATION_STATUSES[0]), side) : status;
    shipment.shipmentStatus = nextStatus;
    shipment.statusHistory = Array.isArray(shipment.statusHistory) ? shipment.statusHistory : [];
    shipment.statusHistory.push({
      date: today(),
      status: nextStatus,
      note,
    });
  });
  saveState();
  render();
}

function setOperationSelectAll(side, checked) {
  document.querySelectorAll(`[data-operation-check][data-operation-side="${side}"]`).forEach((input) => {
    input.checked = checked;
  });
}

function isAirShipment(shipment = {}) {
  const text = `${shipment.mode || ""} ${shipment.flightNo || ""} ${shipment.channel || ""}`.toUpperCase();
  return text.includes("AIR") || text.includes("空运") || text.includes("机场");
}

function cargoRowsForShipment(shipment = {}) {
  return parseCargoLinesJson(shipment.cargoLinesJson || "").filter((row) => (
    row.box || row.name || row.ctn || row.length || row.width || row.height
  ));
}

function cargoRowVolumeWeight(row = {}) {
  return number(row.length) * number(row.width) * number(row.height) * number(row.ctn) / 6000;
}

function cargoRowVolumeM3(row = {}) {
  return number(row.length) * number(row.width) * number(row.height) * number(row.ctn) / 1000000;
}

function shipmentVolumeM3(shipment = {}) {
  const cargoRows = cargoRowsForShipment(shipment);
  if (cargoRows.length) return cargoRows.reduce((sum, row) => sum + cargoRowVolumeM3(row), 0);
  return number(shipment.volumeWeight) / 166.6667;
}

function shipmentSizeSummary(shipment = {}) {
  const cargoRows = cargoRowsForShipment(shipment);
  if (!cargoRows.length) return "";
  return unique(cargoRows
    .filter((row) => number(row.length) || number(row.width) || number(row.height))
    .map((row) => {
      const ctn = number(row.ctn) ? ` × ${number(row.ctn)}件` : "";
      return `${number(row.length)}×${number(row.width)}×${number(row.height)}cm${ctn}`;
    }))
    .join("；");
}

function manifestGroups() {
  const map = new Map();
  state.shipments
    .filter(isAirShipment)
    .forEach((shipment) => {
      const key = shipment.masterNo || shipment.waybill || "未录主单号";
      if (!map.has(key)) {
        map.set(key, {
          masterNo: key,
          flightNo: "",
          destination: "",
          shipments: [],
          ctn: 0,
          weight: 0,
          volumeWeight: 0,
          volume: 0,
          waybills: new Set(),
          descriptions: new Set(),
          sizes: new Set(),
          statuses: new Set(),
        });
      }
      const group = map.get(key);
      group.shipments.push(shipment);
      group.flightNo = group.flightNo || shipment.flightNo || shipment.channel || "";
      group.destination = group.destination || shipment.destination || "";
      if (shipment.waybill) group.waybills.add(shipment.waybill);
      group.ctn += number(shipment.ctn);
      group.weight += number(shipment.weight);
      group.volumeWeight += number(shipment.volumeWeight);
      group.volume += shipmentVolumeM3(shipment);
      if (shipment.description) group.descriptions.add(shipment.description);
      const sizeText = shipmentSizeSummary(shipment);
      if (sizeText) group.sizes.add(sizeText);
      if (shipment.shipmentStatus) group.statuses.add(shipment.shipmentStatus);
    });
  return [...map.values()].sort((a, b) => String(a.masterNo).localeCompare(String(b.masterNo)));
}

function currentManifestGroups() {
  const q = (document.querySelector("#manifestSearch")?.value || "").trim().toLowerCase();
  return manifestGroups().filter((group) => {
    const text = [
      group.masterNo,
      [...group.waybills].join(" "),
      group.flightNo,
      group.destination,
      [...group.descriptions].join(" "),
      [...group.sizes].join(" "),
      [...group.statuses].join(" "),
    ].join(" ").toLowerCase();
    return !q || text.includes(q);
  });
}

function renderAirlineOperations() {
  if (!els.manifestRows) return;
  const groups = currentManifestGroups();
  els.manifestRows.innerHTML = groups.length ? groups.map((group) => `
    <tr>
      <td>${escapeHtml(group.masterNo)}</td>
      <td>${escapeHtml([...group.waybills].join(" / ") || "-")}</td>
      <td>${escapeHtml(group.flightNo || "-")}</td>
      <td>${escapeHtml(group.destination || "-")}</td>
      <td>${group.shipments.length}</td>
      <td class="money">${money(group.ctn)}</td>
      <td class="money">${money(group.weight)}</td>
      <td class="money">${money(group.volumeWeight)}</td>
      <td class="money">${money(group.volume)}</td>
      <td>${escapeHtml([...group.descriptions].join(" / ") || "-")}</td>
      <td>${escapeHtml([...group.statuses].join(" / ") || "-")}</td>
    </tr>
  `).join("") : `<tr><td colspan="11" class="empty">暂无普通空运主单汇总</td></tr>`;
}

function manifestReportHtml(mode = "print") {
  const groups = currentManifestGroups();
  const totals = groups.reduce((sum, group) => ({
    shipments: sum.shipments + group.shipments.length,
    ctn: sum.ctn + group.ctn,
    weight: sum.weight + group.weight,
    volumeWeight: sum.volumeWeight + group.volumeWeight,
    volume: sum.volume + group.volume,
  }), { shipments: 0, ctn: 0, weight: 0, volumeWeight: 0, volume: 0 });
  const rows = groups.map((group) => `
      <tr>
        <td>${escapeHtml(group.masterNo)}</td>
        <td>${escapeHtml([...group.waybills].join(" / "))}</td>
        <td>${escapeHtml(group.flightNo || "")}</td>
        <td>${escapeHtml(group.destination || "")}</td>
        <td>${group.shipments.length}</td>
        <td class="num">${money(group.ctn)}</td>
        <td class="num">${money(group.weight)}</td>
        <td class="num">${money(group.volumeWeight)}</td>
        <td class="num">${money(group.volume)}</td>
        <td>${escapeHtml([...group.descriptions].join(" / "))}</td>
        <td>${escapeHtml([...group.statuses].join(" / "))}</td>
      </tr>
  `).join("");
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Air Manifest</title>
  <style>
    @page { size: A4 landscape; margin: 10mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 297mm; min-height: 210mm; margin: 0 auto; padding: 12mm; background: #fff; }
    .head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
    .logo { width: 62mm; height: auto; }
    h1 { margin: 0; text-align: right; font-size: 24px; }
    h1 span { display: block; font-size: 16px; margin-top: 4px; }
    .summary { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin: 12px 0; }
    .summary div { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; }
    .summary span { display: block; color: #64748b; font-size: 11px; margin-bottom: 4px; }
    .summary strong { font-size: 16px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 10.5px; }
    th, td { border: 1px solid #111827; padding: 5px 6px; text-align: center; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 800; }
    .num { text-align: right; font-variant-numeric: tabular-nums; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print { body { background: #fff; } .page { margin: 0; width: auto; min-height: auto; padding: 0; } .toolbar { display: none; } }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <section class="head">
      <div>${logo ? `<img class="logo" src="${logo}" alt="SYNTRANX LOGISTICS">` : ""}</div>
      <h1>空运 Manifest 汇总<span>Air Manifest Summary</span></h1>
    </section>
    <section class="summary">
      <div><span>主单数</span><strong>${groups.length}</strong></div>
      <div><span>票数</span><strong>${totals.shipments}</strong></div>
      <div><span>件数</span><strong>${money(totals.ctn)}</strong></div>
      <div><span>实重</span><strong>${money(totals.weight)}</strong></div>
      <div><span>体积重/体积</span><strong>${money(totals.volumeWeight)} / ${money(totals.volume)}</strong></div>
    </section>
    <table>
      <thead>
        <tr>
          <th>主单号/提单号</th><th>运单号</th><th>航班/航司</th><th>目的地</th><th>票数</th><th>件数</th><th>实重</th><th>体积重</th><th>体积</th><th>品名汇总</th><th>操作状态</th>
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="11">暂无普通空运主单汇总</td></tr>`}</tbody>
    </table>
  </main>
</body>
</html>`;
}

function exportManifestPdf() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(manifestReportHtml("print"));
  printWindow.document.close();
}

function exportManifestExcel() {
  const html = manifestReportHtml("excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Air-Manifest-${today()}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function renderBookings() {
  if (!els.bookingRows) return;
  const rows = (state.bookings || []).slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  const summary = rows.reduce((acc, booking) => {
    acc.count += 1;
    acc.ctn += number(booking.ctn);
    acc.weight += number(booking.weight);
    acc.profit += number(booking.receivable) - number(booking.payable);
    return acc;
  }, { count: 0, ctn: 0, weight: 0, profit: 0 });
  if (els.bookingCount) els.bookingCount.textContent = String(summary.count);
  if (els.bookingCtn) els.bookingCtn.textContent = money(summary.ctn);
  if (els.bookingWeight) els.bookingWeight.textContent = money(summary.weight);
  if (els.bookingProfit) els.bookingProfit.textContent = money(summary.profit);
  els.bookingRows.innerHTML = rows.length ? rows.map((booking) => `
    <tr>
      <td>${escapeHtml(booking.date || "")}</td>
      <td>${escapeHtml(booking.customer || "")}</td>
      <td>${escapeHtml(booking.airline || "")}</td>
      <td>${escapeHtml(booking.agent || "")}</td>
      <td>${escapeHtml(booking.flightNo || "")}</td>
      <td>${escapeHtml(booking.masterNo || "")}</td>
      <td>${escapeHtml(booking.originAirport || "")}</td>
      <td>${escapeHtml(booking.destinationAirport || "")}</td>
      <td>${escapeHtml(booking.etd || "")}</td>
      <td>${escapeHtml(booking.eta || "")}</td>
      <td class="money">${money(booking.ctn)}</td>
      <td class="money">${money(booking.weight)}</td>
      <td class="money">${money(booking.volumeWeight)}</td>
      <td class="money">${money(booking.receivable)}</td>
      <td class="money">${money(booking.payable)}</td>
      <td class="money">${money(number(booking.receivable) - number(booking.payable))}</td>
      <td><span class="status-chip">${escapeHtml(booking.status || "待订舱")}</span></td>
      <td>${escapeHtml(booking.note || "")}</td>
      <td><div class="row-actions small-actions"><button type="button" data-edit-booking="${booking.id}">改</button><button type="button" class="danger-action" data-delete-booking="${booking.id}">删</button></div></td>
    </tr>
  `).join("") : `<tr><td colspan="19" class="empty">暂无订舱记录</td></tr>`;
}

function saveBooking(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = formToObject(form);
  const record = {
    id: form.dataset.editingId || id("bk"),
    date: data.date || today(),
    customer: data.customer || "",
    airline: data.airline || "",
    agent: data.agent || "",
    flightNo: data.flightNo || "",
    masterNo: data.masterNo || "",
    originAirport: data.originAirport || "",
    destinationAirport: data.destinationAirport || "",
    etd: data.etd || "",
    eta: data.eta || "",
    ctn: number(data.ctn),
    weight: number(data.weight),
    volumeWeight: number(data.volumeWeight),
    receivable: number(data.receivable),
    payable: number(data.payable),
    status: data.status || "待订舱",
    note: data.note || "",
  };
  const index = (state.bookings || []).findIndex((item) => item.id === record.id);
  if (index >= 0) state.bookings[index] = record;
  else {
    state.bookings = state.bookings || [];
    state.bookings.push(record);
  }
  delete form.dataset.editingId;
  form.reset();
  form.date.value = today();
  saveState();
  render();
}

function openBooking(booking) {
  if (!booking || !els.bookingForm) return;
  els.bookingForm.dataset.editingId = booking.id;
  Object.entries(booking).forEach(([key, value]) => {
    if (els.bookingForm.elements[key]) els.bookingForm.elements[key].value = value ?? "";
  });
  switchView("booking");
  els.bookingForm.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderShipments() {
  const q = document.querySelector("#shipmentSearch").value.trim().toLowerCase();
  const status = document.querySelector("#shipmentStatusFilter").value;
  els.shipmentTable.classList.toggle("shipment-details-hidden", !shipmentDetailsExpanded);
  els.toggleShipmentDetailsBtn.textContent = shipmentDetailsExpanded ? "隐藏经营明细" : "展开经营明细";
  const rows = state.shipments
    .map((s) => ({ ...s, ...settlement(s) }))
    .filter((s) => !status || s.status === status)
    .filter((s) => !q || [s.customer, s.mark, s.masterNo, s.waybill, s.description, s.channel, s.mode, s.salesPerson, s.flightNo, s.customsStatus, s.lastMile].some((v) => String(v || "").toLowerCase().includes(q)))
    .sort(sortShipmentsNewestFirst);

  const totalRows = rows.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / shipmentPageSize));
  shipmentPage = Math.min(Math.max(1, shipmentPage), totalPages);
  const startIndex = (shipmentPage - 1) * shipmentPageSize;
  const pageRows = rows.slice(startIndex, startIndex + shipmentPageSize);

  if (els.shipmentPaginationInfo) {
    const visibleStart = totalRows ? startIndex + 1 : 0;
    const visibleEnd = Math.min(startIndex + shipmentPageSize, totalRows);
    els.shipmentPaginationInfo.textContent = `共 ${totalRows} 条，显示 ${visibleStart}-${visibleEnd}，第 ${shipmentPage} / ${totalPages} 页`;
  }
  if (els.shipmentPageSize) els.shipmentPageSize.value = String(shipmentPageSize);
  if (els.shipmentPrevPage) els.shipmentPrevPage.disabled = shipmentPage <= 1;
  if (els.shipmentNextPage) els.shipmentNextPage.disabled = shipmentPage >= totalPages;

  els.shipmentRows.innerHTML = pageRows.length ? pageRows.map((s) => `
    <tr>
      <td>${escapeHtml(s.date)}</td>
      <td>${escapeHtml(s.customer)}</td>
      <td>${escapeHtml(s.mark)}</td>
      <td>${escapeHtml(s.masterNo)}</td>
      <td>${escapeHtml(s.waybill)}</td>
      <td class="detail-col">${escapeHtml(s.channel)}</td>
      <td>${escapeHtml(s.destination)}</td>
      <td class="detail-col">${escapeHtml(s.mode)}</td>
      <td class="detail-col">${escapeHtml(s.shipmentStatus || s.customsStatus)}</td>
      <td class="money">${number(s.ctn) || ""}</td>
      <td class="money">${money(s.chargeWeight)}</td>
      <td class="money">${money(s.unitPrice)}</td>
      <td class="money">${money(s.shouldReceive)}</td>
      <td class="money">${money(s.paid)}</td>
      <td class="money">${money(s.open)}</td>
      <td class="money detail-col">${money(s.cost)}</td>
      <td class="money detail-col">${money(s.profit)}</td>
      <td><span class="status ${paymentStatusClass(s.status)}">${escapeHtml(s.status)}</span></td>
      <td>
        <div class="row-actions shipment-actions">
          <button title="生成派送单" data-delivery-note="${s.id}">单</button>
          <button title="生成单票账单" data-shipment-bill="${s.id}">账</button>
          <button title="详情" data-edit-shipment="${s.id}">详</button>
          <button class="danger-action" title="删除" data-delete-shipment="${s.id}">删</button>
        </div>
      </td>
    </tr>
  `).join("") : `<tr><td colspan="19" class="empty">暂无登记记录</td></tr>`;
}

function renderPayments() {
  const q = document.querySelector("#paymentSearch").value.trim().toLowerCase();
  const rows = state.payments
    .filter((p) => !q || [p.customer, p.waybill, p.account, p.receiveAccount, p.note].some((v) => String(v || "").toLowerCase().includes(q)))
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  els.paymentRows.innerHTML = rows.length ? rows.map((p) => {
    const shipment = findShipmentByWaybill(p.waybill);
    return `
      <tr>
        <td>${escapeHtml(p.date)}</td>
        <td>${escapeHtml(p.customer)}</td>
        <td>${escapeHtml(shipment?.masterNo || "")}</td>
        <td>${escapeHtml(p.waybill)}</td>
        <td>${escapeHtml(p.account)}</td>
        <td>${escapeHtml(p.currency)}</td>
        <td class="money">${money(p.amount)}</td>
        <td class="money">${money(p.rate || 1)}</td>
        <td class="money">${money(paymentRmb(p))}</td>
        <td>${escapeHtml(p.receiveAccount || "")}</td>
        <td>${escapeHtml(p.method)}</td>
        <td>
          <div class="row-actions">
            <button title="编辑" data-edit-payment="${p.id}">改</button>
            <button title="删除" data-delete-payment="${p.id}">删</button>
          </div>
        </td>
      </tr>
    `;
  }).join("") : `<tr><td colspan="12" class="empty">暂无回款记录</td></tr>`;
}


function renderAgingAnalysis() {
  if (!els.agingBucketCards && !els.agingRows) return;
  const buckets = agingBucketSummary();
  if (els.agingBucketCards) {
    els.agingBucketCards.innerHTML = buckets.map((bucket) => `
      <article class="metric aging-card ${bucket.key === "60+" ? "alert" : ""}">
        <span>${escapeHtml(bucket.label)}</span>
        <strong>${money(bucket.amount)}</strong>
        <em>${bucket.count}票 / ${bucket.customerCount}客户</em>
      </article>
    `).join("");
  }
  if (els.agingRows) {
    const rows = openShipmentSettlements();
    els.agingRows.innerHTML = rows.length ? rows.map((row) => `
      <tr>
        <td><span class="aging-pill">${row.ageDays}天 · ${escapeHtml(row.agingLabel)}</span></td>
        <td>${escapeHtml(row.customer)}</td>
        <td>${escapeHtml(row.waybill || row.masterNo || "")}</td>
        <td>${escapeHtml(row.date || "")}</td>
        <td class="money">${money(row.shouldReceive)}</td>
        <td class="money">${money(row.paid)}</td>
        <td class="money">${money(row.open)}</td>
        <td><span class="status ${paymentStatusClass(row.status)}">${escapeHtml(row.status)}</span></td>
      </tr>
    `).join("") : `<tr><td colspan="8" class="empty">暂无未收账龄</td></tr>`;
  }
}

function renderRiskCustomers() {
  if (!els.riskSummaryCards && !els.riskCustomerRows) return;
  const rows = customerPerformanceSummary().filter((row) => row.open > 0.009);
  const groups = ["高风险", "需跟进", "低风险"].map((level) => {
    const items = rows.filter((row) => enhancedRiskLevel(row) === level);
    return { level, count: items.length, amount: items.reduce((sum, row) => sum + row.open, 0) };
  });
  if (els.riskSummaryCards) {
    els.riskSummaryCards.innerHTML = groups.map((group) => `
      <article class="risk-card ${group.level === "高风险" ? "hot" : ""}">
        <span>${escapeHtml(group.level)}</span>
        <strong>${group.count}</strong>
        <em>${money(group.amount)}</em>
      </article>
    `).join("");
  }
  if (els.riskCustomerRows) {
    const sorted = rows.sort((a, b) => {
      const weight = { 高风险: 3, 需跟进: 2, 低风险: 1, 正常: 0 };
      return (weight[enhancedRiskLevel(b)] || 0) - (weight[enhancedRiskLevel(a)] || 0) || b.open - a.open;
    });
    els.riskCustomerRows.innerHTML = sorted.length ? sorted.map((row) => {
      const level = enhancedRiskLevel(row);
      return `
      <tr>
        <td><button class="link-cell" type="button" data-preview-customer="${escapeHtml(row.customer)}" data-jump="customers">${escapeHtml(row.customer)}</button></td>
        <td><span class="status ${level === "高风险" ? "open" : level === "需跟进" ? "balance" : "paid"}">${escapeHtml(level)}</span></td>
        <td class="money">${money(row.open)}</td>
        <td>${row.maxAgeDays}天</td>
        <td>${percent(row.collectionRate)}</td>
        <td class="money">${money(row.profit)}</td>
        <td>${escapeHtml(row.lastDate)}</td>
        <td>${escapeHtml(riskSuggestion(row))}</td>
      </tr>`;
    }).join("") : `<tr><td colspan="8" class="empty">暂无风险客户</td></tr>`;
  }
}

function renderProfitRank() {
  if (!els.customerProfitRank && !els.shipmentProfitRank) return;
  if (els.customerProfitRank) {
    const rows = customerProfitRanking();
    els.customerProfitRank.innerHTML = rows.length ? rows.map((row, index) => renderRankItem(index, row.customer, money(row.profit), `收入 ${money(row.receivable)} · 未收 ${money(row.open)} · ${percent(row.collectionRate)}`))
      .join("") : `<div class="empty">暂无客户利润数据</div>`;
  }
  if (els.shipmentProfitRank) {
    const rows = shipmentProfitRanking();
    els.shipmentProfitRank.innerHTML = rows.length ? rows.map((row, index) => renderRankItem(index, row.waybill || row.masterNo || "未填单号", money(row.profit), `${row.customer || "-"} · 应收 ${money(row.shouldReceive)} · 成本 ${money(row.cost)}`, row.profit < 0))
      .join("") : `<div class="empty">暂无业务利润数据</div>`;
  }
}

function renderRankItem(index, title, value, meta, negative = false) {
  return `
    <article class="rank-item ${negative ? "negative" : ""}">
      <b>${index + 1}</b>
      <div><strong>${escapeHtml(title)}</strong><span>${escapeHtml(meta)}</span></div>
      <em class="money">${escapeHtml(value)}</em>
    </article>
  `;
}

function renderCustomerUpgradeCards() {
  if (!els.customerUpgradeCards) return;
  const rows = customerPerformanceSummary();
  const totalOpen = rows.reduce((sum, row) => sum + row.open, 0);
  const highRisk = rows.filter((row) => enhancedRiskLevel(row) === "高风险").length;
  const overdueAmount = rows.reduce((sum, row) => sum + row.overdueAmount, 0);
  const avgCollection = rows.length ? rows.reduce((sum, row) => sum + row.collectionRate, 0) / rows.length : 0;
  els.customerUpgradeCards.innerHTML = `
    <article><span>客户未收合计</span><strong>${money(totalOpen)}</strong></article>
    <article><span>高风险客户</span><strong>${highRisk}</strong></article>
    <article><span>30天以上逾期</span><strong>${money(overdueAmount)}</strong></article>
    <article><span>平均收款率</span><strong>${percent(avgCollection)}</strong></article>
  `;
}

function renderCustomers() {
  const q = document.querySelector("#customerSearch").value.trim().toLowerCase();
  const rows = customerSummary().filter((c) => !q || c.customer.toLowerCase().includes(q));
  renderCustomerUpgradeCards();
  const pendingRows = rows.filter((c) => number(c.open) > 0.009);
  const completedRows = rows.filter((c) => number(c.open) <= 0.009);
  els.customerRows.innerHTML = renderCustomerSummaryRows(pendingRows, "暂无未完成结算客户单位");
  if (els.completedCustomerRows) {
    els.completedCustomerRows.innerHTML = renderCustomerSummaryRows(completedRows, "暂无已完成结算客户单位", true);
  }
  renderCustomerDetail();
}

function renderCustomerSummaryRows(rows, emptyText, completed = false) {
  const performanceMap = new Map(customerPerformanceSummary().map((row) => [row.customer, row]));
  return rows.length ? rows.map((c) => {
    const perf = performanceMap.get(c.customer) || c;
    const risk = enhancedRiskLevel(perf);
    return `
    <tr>
      <td><button class="link-cell" type="button" data-preview-customer="${escapeHtml(c.customer)}">${escapeHtml(c.customer)}</button></td>
      <td>${c.count}</td>
      <td class="money">${money(c.receivable)}</td>
      <td>${escapeHtml((c.currencies || ["RMB"]).join(" / "))}</td>
      <td class="money">${money(c.paid)}</td>
      <td class="money">${money(c.open)}</td>
      <td><span class="status ${completed ? "paid" : risk === "高风险" ? "open" : risk === "需跟进" ? "balance" : "paid"}">${completed ? "完成结算" : escapeHtml(risk)}</span></td>
      <td>${perf.maxAgeDays || 0}天</td>
      <td>${percent(perf.collectionRate || 0)}</td>
      <td class="money">${money(perf.profit || 0)}</td>
      <td>${escapeHtml(c.lastDate)}</td>
    </tr>`;
  }).join("") : `<tr><td colspan="11" class="empty">${escapeHtml(emptyText)}</td></tr>`;
}

function customerDetailRows(customer) {
  return state.shipments
    .map((shipment) => ({ ...shipment, ...settlement(shipment) }))
    .filter((shipment) => matchesStatementCustomer(shipment, customer))
    .filter(shipmentMatchesCustomerLedgerFilters)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function previewCustomerDetail(customer) {
  selectedCustomerDetail = customer;
  const input = document.querySelector("#customerSearch");
  if (input) input.value = customer;
  renderCustomers();
}

function clearCustomerDetail() {
  selectedCustomerDetail = "";
  const input = document.querySelector("#customerSearch");
  if (input) input.value = "";
  if (els.customerSearchSuggest) els.customerSearchSuggest.innerHTML = "";
  const panel = document.querySelector("#customerDetailPanel");
  if (panel) panel.hidden = true;
  if (els.customerDetailRows) els.customerDetailRows.innerHTML = "";
  renderCustomers();
}

function renderCustomerDetail() {
  const panel = document.querySelector("#customerDetailPanel");
  if (!panel || !els.customerDetailRows) return;
  if (!selectedCustomerDetail) {
    panel.hidden = true;
    els.customerDetailRows.innerHTML = "";
    return;
  }
  const rows = customerDetailRows(selectedCustomerDetail);
  const totals = rows.reduce((acc, row) => {
    acc.receivable += row.shouldReceive;
    acc.paid += row.paid;
    acc.open += row.open;
    return acc;
  }, { receivable: 0, paid: 0, open: 0 });
  panel.hidden = false;
  document.querySelector("#customerDetailTitle").textContent = `${selectedCustomerDetail} 账单明细预览`;
  document.querySelector("#customerDetailSummary").textContent = `票数 ${rows.length} ｜ 总应收 ${money(totals.receivable)} ｜ 已核销 ${money(totals.paid)} ｜ 未收 ${money(totals.open)}`;
  els.customerDetailRows.innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.date)}</td>
      <td>${escapeHtml(row.masterNo || "")}</td>
      <td>${escapeHtml(row.waybill || "")}</td>
      <td>${escapeHtml(row.mark || "")}</td>
      <td>${escapeHtml(row.destination || "")}</td>
      <td>${escapeHtml(row.description || "")}</td>
      <td class="money">${number(row.ctn) || ""}</td>
      <td class="money">${money(row.chargeWeight)}</td>
      <td class="money">${money(row.unitPrice)}</td>
      <td class="money">${money(row.shouldReceive)}</td>
      <td class="money">${money(row.paid)}</td>
      <td class="money">${money(row.open)}</td>
      <td><span class="status ${paymentStatusClass(row.status)}">${escapeHtml(row.status)}</span></td>
    </tr>
  `).join("") : `<tr><td colspan="13" class="empty">暂无该客户单位明细</td></tr>`;
}

function renderCustomerSearchSuggestions() {
  if (!els.customerSearchSuggest) return;
  const input = document.querySelector("#customerSearch");
  const q = input.value.trim().toLowerCase();
  const focused = document.activeElement === input;
  if (!focused || !q) {
    els.customerSearchSuggest.innerHTML = "";
    return;
  }
  const matches = customerSummary()
    .filter((c) => c.customer.toLowerCase().includes(q))
    .slice(0, 8);
  els.customerSearchSuggest.innerHTML = matches.length ? matches.map((c) => `
    <button type="button" data-fill-customer-search="${escapeHtml(c.customer)}">
      <strong>${escapeHtml(c.customer)}</strong>
      <span>${escapeHtml((c.currencies || ["RMB"]).join(" / "))} · 未收 ${money(c.open)}</span>
    </button>
  `).join("") : "";
}

function selectCustomerSearch(value) {
  const input = document.querySelector("#customerSearch");
  input.value = value;
  selectedCustomerDetail = value;
  if (els.customerSearchSuggest) els.customerSearchSuggest.innerHTML = "";
  renderCustomers();
}

function renderFinance() {
  const summary = financeSummary();
  document.querySelector("#financeRevenue").textContent = money(summary.revenue);
  document.querySelector("#financeBizCost").textContent = money(summary.bizCost);
  document.querySelector("#financeGrossProfit").textContent = money(summary.grossProfit);
  document.querySelector("#financeExpense").textContent = money(summary.expense);
  document.querySelector("#financeNetProfit").textContent = money(summary.netProfit);

  const expenseRows = reportExpenseRows().sort((a, b) => String(b.date).localeCompare(String(a.date)));
  els.expenseRows.innerHTML = expenseRows.length ? expenseRows.map((item) => `
    <tr>
      <td>${escapeHtml(item.date)}</td>
      <td>${escapeHtml(item.category)}</td>
      <td>${escapeHtml(item.account)}</td>
      <td class="money">${money(item.amount)}</td>
      <td>${escapeHtml(item.currency || "RMB")}</td>
      <td class="money">${money(expenseRmb(item))}</td>
      <td>${escapeHtml(item.voucherName || "")}</td>
      <td>${escapeHtml(item.note)}</td>
      <td>
        <div class="row-actions">
          <button title="删除" data-delete-expense="${item.id}">删</button>
        </div>
      </td>
    </tr>
  `).join("") : `<tr><td colspan="9" class="empty">暂无费用登记</td></tr>`;

  const categories = expenseSummary();
  const maxAmount = Math.max(1, ...categories.map((item) => item.amount));
  els.expenseBars.innerHTML = categories.length ? categories.map((item) => `
    <div class="bar-row">
      <strong>${escapeHtml(item.category)}</strong>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, item.amount / maxAmount * 100)}%"></div></div>
      <span class="money">${money(item.amount)}</span>
    </div>
  `).join("") : `<div class="empty">暂无费用数据</div>`;
}

function accountLedgerRows() {
  const incomeRows = state.payments
    .filter((p) => p.receiveAccount)
    .map((p) => {
      const shipment = findShipmentByWaybill(p.waybill);
      return {
        id: p.id,
        date: p.date || "",
        account: p.receiveAccount || "",
        direction: "收入",
        source: "回款核销",
        subject: p.customer || "",
        masterNo: shipment?.masterNo || "",
        waybill: p.waybill || "",
        currency: p.currency || "RMB",
        amount: number(p.amount),
        rate: number(p.rate) || 1,
        rmb: paymentRmb(p),
        voucherName: p.voucherName || "",
        note: p.note || "",
      };
    });
  const expenseRows = state.expenses
    .filter((item) => item.account)
    .flatMap((item) => {
      if (isInternalTransferExpense(item)) {
        const fromAccount = normalizeAccountName(item.transferFromAccount);
        const toAccount = normalizeAccountName(item.transferToAccount);
        const amount = number(item.amount);
        const rate = number(item.rate) || defaultExpenseRate(item.currency || "RMB");
        const rmb = expenseRmb(item);
        return [
          {
            id: `${item.id}-out`,
            date: item.date || "",
            account: fromAccount,
            direction: "支出",
            source: "内部资金调拨",
            subject: "资金调拨",
            masterNo: "",
            waybill: "",
            currency: item.currency || "RMB",
            amount,
            rate,
            rmb,
            voucherName: item.voucherName || "",
            note: `转出到 ${toAccount}${item.note ? `；${item.note}` : ""}`,
          },
          {
            id: `${item.id}-in`,
            date: item.date || "",
            account: toAccount,
            direction: "收入",
            source: "内部资金调拨",
            subject: "资金调拨",
            masterNo: "",
            waybill: "",
            currency: item.currency || "RMB",
            amount,
            rate,
            rmb,
            voucherName: item.voucherName || "",
            note: `从 ${fromAccount} 转进${item.note ? `；${item.note}` : ""}`,
          },
        ];
      }
      return [{
        id: item.id,
        date: item.date || "",
        account: item.account || "",
        direction: "支出",
        source: "费用登记",
        subject: item.category || "",
        masterNo: "",
        waybill: "",
        currency: item.currency || "RMB",
        amount: number(item.amount),
        rate: number(item.rate) || defaultExpenseRate(item.currency || "RMB"),
        rmb: expenseRmb(item),
        voucherName: item.voucherName || "",
        note: item.note || "",
      }];
    });
  return [...incomeRows, ...expenseRows].sort((a, b) => String(b.date).localeCompare(String(a.date)));
}

function renderAccountOptions() {
  const select = document.querySelector("#accountFilter");
  if (!select) return;
  const current = select.value;
  const options = accountOptions();
  select.innerHTML = `<option value="">全部收支账号</option>${options.map((account) => `<option value="${escapeHtml(account)}">${escapeHtml(account)}</option>`).join("")}`;
  select.value = options.includes(current) ? current : "";
}

function currentAccountLedgerRows() {
  const selected = document.querySelector("#accountFilter")?.value || "";
  const q = (document.querySelector("#accountSearch")?.value || "").trim().toLowerCase();
  return accountLedgerRows().filter((row) => {
    const accountMatch = !selected || row.account === selected;
    const searchMatch = !q || [row.account, row.direction, row.source, row.subject, row.masterNo, row.waybill, row.currency, row.voucherName, row.note]
      .some((value) => String(value || "").toLowerCase().includes(q));
    return accountMatch && searchMatch;
  });
}

function accountLedgerTotals(rows) {
  const income = rows.filter((row) => row.direction === "收入").reduce((sum, row) => sum + row.rmb, 0);
  const expense = rows.filter((row) => row.direction === "支出").reduce((sum, row) => sum + row.rmb, 0);
  return {
    income,
    expense,
    balance: income - expense,
    count: rows.length,
  };
}

function renderAccounts() {
  renderAccountOptions();
  const rows = currentAccountLedgerRows();
  const totals = accountLedgerTotals(rows);
  document.querySelector("#accountIncome").textContent = money(totals.income);
  document.querySelector("#accountExpense").textContent = money(totals.expense);
  document.querySelector("#accountBalance").textContent = money(totals.balance);
  document.querySelector("#accountCount").textContent = String(totals.count);
  els.accountRows.innerHTML = rows.length ? rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.date)}</td>
      <td>${escapeHtml(row.account)}</td>
      <td><span class="status ${row.direction === "收入" ? "paid" : "open"}">${escapeHtml(row.direction)}</span></td>
      <td>${escapeHtml(row.source)}</td>
      <td>${escapeHtml(row.subject)}</td>
      <td>${escapeHtml(row.masterNo)}</td>
      <td>${escapeHtml(row.waybill)}</td>
      <td>${escapeHtml(row.currency)}</td>
      <td class="money">${money(row.amount)}</td>
      <td class="money">${money(row.rate)}</td>
      <td class="money">${money(row.rmb)}</td>
      <td>${escapeHtml(row.voucherName)}</td>
      <td>${escapeHtml(row.note)}</td>
    </tr>
  `).join("") : `<tr><td colspan="13" class="empty">暂无账户流水</td></tr>`;
}

function accountLedgerReportHtml(mode = "print") {
  const rows = currentAccountLedgerRows();
  const totals = accountLedgerTotals(rows);
  const selectedAccount = document.querySelector("#accountFilter")?.value || "全部收支账号";
  const keyword = document.querySelector("#accountSearch")?.value.trim() || "全部";
  const bodyRows = rows.map((row) => `
        <tr>
          <td>${escapeHtml(row.date)}</td>
          <td>${escapeHtml(row.account)}</td>
          <td>${escapeHtml(row.direction)}</td>
          <td>${escapeHtml(row.source)}</td>
          <td>${escapeHtml(row.subject)}</td>
          <td>${escapeHtml(row.masterNo)}</td>
          <td>${escapeHtml(row.waybill)}</td>
          <td>${escapeHtml(row.currency)}</td>
          <td class="money">${money(row.amount)}</td>
          <td class="money">${money(row.rate)}</td>
          <td class="money">${money(row.rmb)}</td>
          <td>${escapeHtml(row.voucherName)}</td>
          <td>${escapeHtml(row.note)}</td>
        </tr>
  `).join("");
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>账户流水明细</title>
  <style>
    @page { size: A4 landscape; margin: 10mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 297mm; min-height: 210mm; margin: 0 auto; padding: 12mm; background: #fff; }
    .head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .logo { width: 64mm; height: auto; }
    h1 { margin: 0; text-align: right; font-size: 24px; }
    h1 span { display: block; font-size: 15px; margin-top: 4px; }
    .meta { text-align: right; color: #4b5563; margin-top: 8px; font-size: 12px; }
    .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 12px 0; }
    .summary div { border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; }
    .summary span { display: block; color: #64748b; font-size: 11px; margin-bottom: 4px; }
    .summary strong { font-size: 17px; }
    .filter { color: #475569; font-size: 12px; margin: 6px 0 12px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 10.5px; }
    th, td { border: 1px solid #111827; padding: 5px 6px; text-align: center; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 800; }
    th:nth-child(1), td:nth-child(1) { width: 8%; }
    th:nth-child(2), td:nth-child(2) { width: 12%; }
    th:nth-child(3), td:nth-child(3),
    th:nth-child(4), td:nth-child(4),
    th:nth-child(8), td:nth-child(8) { width: 7%; }
    th:nth-child(5), td:nth-child(5) { width: 9%; }
    th:nth-child(6), td:nth-child(6),
    th:nth-child(7), td:nth-child(7) { width: 10%; }
    th:nth-child(9), td:nth-child(9),
    th:nth-child(10), td:nth-child(10),
    th:nth-child(11), td:nth-child(11) { width: 8%; }
    th:nth-child(12), td:nth-child(12) { width: 10%; }
    th:nth-child(13), td:nth-child(13) { width: 12%; }
    .money { text-align: right; font-variant-numeric: tabular-nums; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <section class="head">
      <div>${logo ? `<img class="logo" src="${logo}" alt="SYNTRANX LOGISTICS">` : ""}</div>
      <div>
        <h1>账户流水明细<span>Account Ledger Detail</span></h1>
        <div class="meta">导出日期：${escapeHtml(today())}</div>
      </div>
    </section>
    <section class="summary">
      <div><span>收入合计</span><strong>${money(totals.income)}</strong></div>
      <div><span>支出合计</span><strong>${money(totals.expense)}</strong></div>
      <div><span>账户余额</span><strong>${money(totals.balance)}</strong></div>
      <div><span>流水笔数</span><strong>${escapeHtml(totals.count)}</strong></div>
    </section>
    <div class="filter">筛选账号：${escapeHtml(selectedAccount)}　搜索条件：${escapeHtml(keyword)}</div>
    <table>
      <thead>
        <tr>
          <th>日期</th>
          <th>收支账号</th>
          <th>收支</th>
          <th>来源</th>
          <th>客户单位/类别</th>
          <th>主单号</th>
          <th>运单号</th>
          <th>币种</th>
          <th>原币金额</th>
          <th>汇率</th>
          <th>折算RMB</th>
          <th>凭证</th>
          <th>备注</th>
        </tr>
      </thead>
      <tbody>${bodyRows || `<tr><td colspan="13">暂无账户流水</td></tr>`}</tbody>
    </table>
  </main>
</body>
</html>`;
}

function exportAccountLedgerPdf() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(accountLedgerReportHtml("print"));
  printWindow.document.close();
}

function exportAccountLedgerExcel() {
  const html = accountLedgerReportHtml("excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `账户流水明细-${today()}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function renderAccountRequests() {
  if (!els.accountRequestRows) return;
  const rows = state.accountRequests || [];
  els.accountRequestRows.innerHTML = rows.length ? rows.map((request) => `
    <tr>
      <td>${escapeHtml(request.accountName)}</td>
      <td>${escapeHtml(request.note || "")}</td>
      <td><span class="status ${request.status === "approved" ? "paid" : request.status === "rejected" ? "open" : "balance"}">${escapeHtml(request.status === "approved" ? "已入册" : request.status === "rejected" ? "已驳回" : "待审批")}</span></td>
      <td>
        <div class="row-actions">
          ${request.status === "pending" ? `<button type="button" data-approve-account="${request.id}">同意入册</button><button class="danger-action" type="button" data-reject-account="${request.id}">驳回</button>` : ""}
        </div>
      </td>
    </tr>
  `).join("") : `<tr><td colspan="4" class="empty">暂无账号申请</td></tr>`;
}

function submitAccountRequest(event) {
  event.preventDefault();
  const data = formToObject(event.currentTarget);
  const accountName = normalizeAccountName(data.accountName);
  if (!accountName) return;
  if (accountOptions().includes(accountName)) {
    alert("这个账号已经在标准账号列表里。");
    return;
  }
  const existingPending = (state.accountRequests || []).some((request) => request.status === "pending" && request.accountName === accountName);
  if (existingPending) {
    alert("这个账号已经提交过申请，正在等待审批。");
    return;
  }
  state.accountRequests = [
    ...(state.accountRequests || []),
    { id: id("ar"), accountName, note: data.note || "", status: "pending", date: today() },
  ];
  event.currentTarget.reset();
  saveState();
  render();
}

function approveAccountRequest(requestId) {
  const request = (state.accountRequests || []).find((item) => item.id === requestId);
  if (!request) return;
  request.status = "approved";
  state.options.paymentAccounts = unique([...(state.options.paymentAccounts || []), request.accountName]);
  saveState();
  render();
}

function rejectAccountRequest(requestId) {
  const request = (state.accountRequests || []).find((item) => item.id === requestId);
  if (!request) return;
  request.status = "rejected";
  saveState();
  render();
}

function renderProfiles() {
  els.profileRows.innerHTML = state.profiles.length ? state.profiles.map((p) => `
    <tr>
      <td>${escapeHtml(p.mark)}</td>
      <td>${escapeHtml(p.shipper || p.receiver)}</td>
      <td>${escapeHtml(p.receiver)}</td>
      <td>${escapeHtml(p.receiverPhone || p.shipperPhone)}</td>
      <td>${escapeHtml(p.address)}</td>
      <td>
        <div class="row-actions">
          <button title="编辑" data-edit-customer="${p.id}">改</button>
          <button title="删除" data-delete-customer="${p.id}">删</button>
        </div>
      </td>
    </tr>
  `).join("") : `<tr><td colspan="6" class="empty">暂无客户单位资料</td></tr>`;
}

function findProfileForShipment(shipment) {
  const lowerCustomer = String(shipment.customer || "").toLowerCase();
  const lowerMark = String(shipment.mark || "").toLowerCase();
  return state.profiles.find((p) => {
    return [p.mark, p.receiver, p.shipper].some((value) => {
      const lower = String(value || "").toLowerCase();
      return lower && (lower === lowerCustomer || lower === lowerMark);
    });
  }) || {};
}

function findProfileByCustomer(customer) {
  const target = normalizeText(customer);
  if (!target) return null;
  return state.profiles.find((profile) => {
    return [profile.receiver, profile.shipper, profile.mark].some((value) => normalizeText(value) === target);
  }) || null;
}

function rememberCustomerContact(shipment) {
  const customer = String(shipment.customer || "").trim();
  const address = String(shipment.customerAddress || "").trim();
  const receiverPhone = String(shipment.receiverPhone || "").trim();
  if (!customer || (!address && !receiverPhone)) return;
  const profile = findProfileByCustomer(customer);
  if (profile) {
    if (address) profile.address = address;
    if (receiverPhone) profile.receiverPhone = receiverPhone;
    if (!profile.shipper) profile.shipper = customer;
    if (!profile.receiver) profile.receiver = customer;
    if (!profile.mark && shipment.mark) profile.mark = shipment.mark;
    return;
  }
  state.profiles.push({
    id: id("c"),
    mark: shipment.mark || "",
    shipper: customer,
    shipperPhone: "",
    receiver: customer,
    receiverPhone,
    address,
  });
}

function shippingMethodText(shipment) {
  const mode = String(shipment.mode || "");
  if (mode.toUpperCase().includes("SEA") || mode.includes("海")) return "海运 / SEA";
  if (mode.toUpperCase().includes("AIR") || mode.includes("空")) return "空运 / AIR";
  return mode || "空运 / AIR";
}

function qrGfMultiply(a, b) {
  let result = 0;
  while (b > 0) {
    if (b & 1) result ^= a;
    a <<= 1;
    if (a & 0x100) a ^= 0x11d;
    b >>= 1;
  }
  return result;
}

function qrGeneratorPolynomial(degree) {
  const result = Array(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i += 1) {
    for (let j = 0; j < degree; j += 1) {
      result[j] = qrGfMultiply(result[j], root);
      if (j + 1 < degree) result[j] ^= result[j + 1];
    }
    root = qrGfMultiply(root, 2);
  }
  return result;
}

function qrReedSolomon(data, degree) {
  const divisor = qrGeneratorPolynomial(degree);
  const result = Array(degree).fill(0);
  data.forEach((byte) => {
    const factor = byte ^ result.shift();
    result.push(0);
    for (let i = 0; i < degree; i += 1) {
      result[i] ^= qrGfMultiply(divisor[i], factor);
    }
  });
  return result;
}

function qrAppendBits(bits, value, length) {
  for (let i = length - 1; i >= 0; i -= 1) bits.push((value >>> i) & 1);
}

function qrFormatBits(mask) {
  let data = (1 << 3) | mask;
  let value = data << 10;
  const generator = 0x537;
  for (let i = 14; i >= 10; i -= 1) {
    if ((value >>> i) & 1) value ^= generator << (i - 10);
  }
  return ((data << 10) | value) ^ 0x5412;
}

function makeQrSvg(text) {
  const encoder = new TextEncoder();
  const bytes = [...encoder.encode(String(text || "").slice(0, 50))];
  const version = 3;
  const size = 17 + version * 4;
  const dataCodewords = 55;
  const ecCodewords = 15;
  const modules = Array.from({ length: size }, () => Array(size).fill(false));
  const reserved = Array.from({ length: size }, () => Array(size).fill(false));
  const set = (x, y, dark = true, reserve = true) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    modules[y][x] = dark;
    if (reserve) reserved[y][x] = true;
  };
  const finder = (x, y) => {
    for (let dy = -1; dy <= 7; dy += 1) {
      for (let dx = -1; dx <= 7; dx += 1) {
        const xx = x + dx;
        const yy = y + dy;
        const inCore = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6;
        const dark = inCore && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4));
        set(xx, yy, dark);
      }
    }
  };
  finder(0, 0);
  finder(size - 7, 0);
  finder(0, size - 7);
  for (let i = 8; i < size - 8; i += 1) {
    set(i, 6, i % 2 === 0);
    set(6, i, i % 2 === 0);
  }
  const align = (cx, cy) => {
    for (let dy = -2; dy <= 2; dy += 1) {
      for (let dx = -2; dx <= 2; dx += 1) {
        set(cx + dx, cy + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
      }
    }
  };
  align(22, 22);
  set(8, 21, true);
  for (let i = 0; i < 9; i += 1) {
    if (i !== 6) {
      reserved[8][i] = true;
      reserved[i][8] = true;
    }
  }
  for (let i = size - 8; i < size; i += 1) {
    reserved[8][i] = true;
    reserved[i][8] = true;
  }
  const bits = [];
  qrAppendBits(bits, 0x4, 4);
  qrAppendBits(bits, bytes.length, 8);
  bytes.forEach((byte) => qrAppendBits(bits, byte, 8));
  qrAppendBits(bits, 0, Math.min(4, dataCodewords * 8 - bits.length));
  while (bits.length % 8) bits.push(0);
  const data = [];
  for (let i = 0; i < bits.length; i += 8) data.push(bits.slice(i, i + 8).reduce((sum, bit) => (sum << 1) | bit, 0));
  for (let pad = 0xec; data.length < dataCodewords; pad = pad === 0xec ? 0x11 : 0xec) data.push(pad);
  const allBits = [...data, ...qrReedSolomon(data, ecCodewords)].flatMap((byte) => {
    const row = [];
    qrAppendBits(row, byte, 8);
    return row;
  });
  let bitIndex = 0;
  let upward = true;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right -= 1;
    for (let i = 0; i < size; i += 1) {
      const y = upward ? size - 1 - i : i;
      for (let dx = 0; dx < 2; dx += 1) {
        const x = right - dx;
        if (reserved[y][x]) continue;
        const raw = bitIndex < allBits.length ? allBits[bitIndex] === 1 : false;
        modules[y][x] = raw !== ((x + y) % 2 === 0);
        bitIndex += 1;
      }
    }
    upward = !upward;
  }
  const format = qrFormatBits(0);
  const formatBit = (i) => ((format >>> i) & 1) === 1;
  for (let i = 0; i <= 5; i += 1) set(8, i, formatBit(i));
  set(8, 7, formatBit(6));
  set(8, 8, formatBit(7));
  set(7, 8, formatBit(8));
  for (let i = 9; i < 15; i += 1) set(14 - i, 8, formatBit(i));
  for (let i = 0; i < 8; i += 1) set(size - 1 - i, 8, formatBit(i));
  for (let i = 8; i < 15; i += 1) set(8, size - 15 + i, formatBit(i));
  set(8, size - 8, true);
  const rects = [];
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (modules[y][x]) rects.push(`<rect x="${x + 4}" y="${y + 4}" width="1" height="1"/>`);
    }
  }
  return `<svg viewBox="0 0 ${size + 8} ${size + 8}" xmlns="http://www.w3.org/2000/svg" role="img"><rect width="100%" height="100%" fill="#fff"/><g fill="#111827">${rects.join("")}</g></svg>`;
}

function receivableChargeItems(shipment) {
  return [
    ["保险费", "chargeInsurance"],
    ["提货费", "chargePickup"],
    ["派送费", "chargeDelivery"],
    ["文件费", "chargeDocument"],
    ["登记费", "chargeRegistration"],
    ["清关费", "chargeCustoms"],
    ["仓储费", "chargeStorage"],
    ["其他应收", "chargeOther"],
  ].map(([label, key]) => ({ label, amount: amountInRmb(shipment, key) })).filter((item) => item.amount > 0);
}

function deliveryNoteHtml(shipment) {
  const st = settlement(shipment);
  const profile = findProfileForShipment(shipment);
  const logo = window.COMPANY_LOGO_DATA_URL || "";
  const trackingNo = shipment.masterNo || shipment.waybill || "";
  const cnee = profile.receiver || shipment.customer || "";
  const phone = shipment.receiverPhone || profile.receiverPhone || profile.shipperPhone || "";
  const address = shipment.customerAddress || profile.address || "";
  const dateText = String(shipment.date || today()).replaceAll("-", ".");
  const method = shippingMethodText(shipment);
  const feeDetail = method.includes("SEA") ? "海运费" : "空运费";
  const ctn = number(shipment.ctn) || "";
  const chargeWeight = money(shipment.chargeWeight);
  const showReceivable = String(shipment.terms || "").includes("到付票结");
  const unitPrice = showReceivable ? money(amountInRmb(shipment, "unitPrice")) : "0.00";
  const totalPlain = showReceivable ? money(st.shouldReceive) : "0.00";
  const baseAmount = showReceivable ? baseFreightReceivable(shipment) : 0;
  const extraRows = receivableChargeItems(shipment).map((item) => `
        <tr>
          <td>${escapeHtml(trackingNo)}</td>
          <td>${escapeHtml(shipment.chargeNote || shipment.description || "")}</td>
          <td>${escapeHtml(item.label)}</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="amount-cell">${escapeHtml(showReceivable ? money(item.amount) : "0.00")}</td>
        </tr>
  `).join("");
  const qrPayload = `POD|${shipment.masterNo || ""}|${shipment.waybill || ""}`;
  const qrSvg = makeQrSvg(qrPayload);

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(shipment.mark || shipment.customer || "delivery-note")}-${escapeHtml(shipment.waybill || "")}</title>
  <style>
    @page { size: A4; margin: 16mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: #f3f4f6; }
    .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 18mm 16mm; background: #fff; }
    .doc-head { position: relative; min-height: 32mm; margin-bottom: 8px; }
    .logo-wrap { position: absolute; left: 0; top: 0; text-align: left; }
    .logo-wrap img { width: 112mm; max-width: 54%; height: auto; }
    .qr-wrap { position: absolute; right: 0; top: 0; width: 28mm; text-align: center; color: #334155; font-size: 9px; font-weight: 700; }
    .qr-wrap svg { display: block; width: 28mm; height: 28mm; border: 1px solid #e5e7eb; }
    .qr-wrap span { display: block; margin-top: 2px; white-space: nowrap; }
    .title { text-align: center; padding-top: 14mm; margin-bottom: 28px; }
    .title h1 { margin: 0; font-size: 28px; letter-spacing: 0; }
    .title p { margin: 5px 0 0; font-size: 18px; font-weight: 700; }
    .title-rule { display: grid; gap: 1px; width: 100%; margin: 12px 0 0; }
    .title-rule span { display: block; width: 100%; background: #0b5a3a; }
    .title-rule .thin { height: 1px; }
    .title-rule .bold { height: 2.5px; }
    .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; font-size: 15px; margin-bottom: 18px; }
    .meta div {
      display: grid;
      grid-template-columns: 38mm 1fr;
      align-items: end;
      min-height: 26px;
      border-bottom: 1px solid #d1d5db;
      padding-bottom: 4px;
    }
    .meta strong { display: block; white-space: nowrap; }
    .meta span { display: block; min-width: 0; }
    table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px; }
    .receipt-table { table-layout: fixed; }
    .receipt-table th,
    .receipt-table td { border: 1px solid #111827; text-align: center; vertical-align: middle; line-height: 1.25; }
    .receipt-table th { height: 18mm; padding: 6px 5px; font-weight: 800; background: #f8fafc; }
    .receipt-table td { height: 13mm; padding: 6px 6px; }
    .receipt-table .tracking { width: 18%; }
    .receipt-table .description { width: 16%; }
    .receipt-table .fee { width: 14%; }
    .receipt-table .ctn { width: 8%; }
    .receipt-table .weight { width: 12%; }
    .receipt-table .price { width: 14%; }
    .receipt-table .amount { width: 18%; }
    .receipt-table td { overflow-wrap: anywhere; }
    .receipt-table td.amount-cell,
    .receipt-table td.price-cell,
    .receipt-table td.weight-cell { font-variant-numeric: tabular-nums; }
    .total { display: grid; grid-template-columns: 1fr 180px 180px; align-items: end; gap: 14px; margin-top: 12px; font-size: 16px; font-weight: 800; }
    .total-label { text-align: right; }
    .total span { min-width: 180px; border-bottom: 2px solid #111827; text-align: center; padding-bottom: 4px; }
    .notice { margin-top: 44px; font-size: 14px; line-height: 1.7; }
    .sign { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-top: 52px; font-size: 15px; }
    .sign div { border-bottom: 1px solid #111827; padding-bottom: 28px; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <button onclick="window.print()">打印/另存PDF</button>
    <button onclick="window.close()">关闭</button>
  </div>
  <main class="page">
    <section class="doc-head">
      ${logo ? `<div class="logo-wrap"><img src="${logo}" alt="SYNTRANX LOGISTICS"></div>` : ""}
      <div class="qr-wrap">${qrSvg}<span>扫码上传签收单</span></div>
      <div class="title">
        <h1>派送签收单</h1>
        <p>Delivery Receipt</p>
        <div class="title-rule"><span class="thin"></span><span class="bold"></span></div>
      </div>
    </section>
    <section class="meta">
      <div><strong>日期 Inv Date:</strong><span>${escapeHtml(dateText)}</span></div>
      <div><strong>方式 Mode:</strong><span>${escapeHtml(method.split(" / ")[0] || method)}</span></div>
      <div><strong>收货人 Cnee:</strong><span>${escapeHtml(cnee)} ${escapeHtml(phone)}</span></div>
      <div><strong>运输 Ship:</strong><span>${escapeHtml(method.split(" / ")[1] || method)}</span></div>
      <div><strong>地址 Address:</strong><span>${escapeHtml(address)}</span></div>
      <div><strong>唛头 Mark:</strong><span>${escapeHtml(shipment.mark || "")}</span></div>
    </section>
    <table class="receipt-table">
      <colgroup>
        <col class="tracking">
        <col class="description">
        <col class="fee">
        <col class="ctn">
        <col class="weight">
        <col class="price">
        <col class="amount">
      </colgroup>
      <thead>
        <tr>
          <th>货运单号<br>Tracking No</th>
          <th>品名<br>Description</th>
          <th>收费项目<br>Fee Detail</th>
          <th>件数<br>Ctn</th>
          <th>计费重量<br>C.w kg</th>
          <th>单价<br>Unit Price</th>
          <th>总额（RMB）<br>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${escapeHtml(trackingNo)}</td>
          <td>${escapeHtml(shipment.description || "")}</td>
          <td>${escapeHtml(feeDetail)}</td>
          <td>${escapeHtml(ctn)}</td>
          <td class="weight-cell">${escapeHtml(chargeWeight)}</td>
          <td class="price-cell">${escapeHtml(unitPrice)}</td>
          <td class="amount-cell">${escapeHtml(money(baseAmount))}</td>
        </tr>
        ${extraRows}
      </tbody>
    </table>
    <div class="total"><div></div><div class="total-label">TOTAL PAYMENT</div><span>${escapeHtml(totalPlain)}</span></div>
    <section class="notice">
      <div>货物签收即视为完好交付，签收后我方不承担任何责任。</div>
      <div>Sign-off confirms goods are delivered in good condition. We shall not be liable after collection.</div>
    </section>
    <section class="sign">
      <div>收货人 Cnee：</div>
      <div>日期 Date：</div>
    </section>
  </main>
</body>
</html>`;
}

function openDeliveryNote(idValue) {
  const shipment = state.shipments.find((s) => s.id === idValue);
  if (!shipment) return;
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再生成派送单。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(deliveryNoteHtml(shipment));
  printWindow.document.close();
}

function exportCustomerTemplate() {
  downloadCsv("客户单位资料导入模板.csv", [[
    "唛头",
    "发货人",
    "发货人电话",
    "收货人",
    "收货人电话",
    "地址/备注",
  ]]);
}

function importCustomerCsv(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || "").replace(/^\ufeff/, "");
    const rows = text.split(/\r?\n/).filter(Boolean).map(parseCsvLine);
    const [, ...dataRows] = rows;
    let added = 0;
    for (const row of dataRows) {
      if (!row.some(Boolean)) continue;
      state.profiles.push({
        id: id("c"),
        mark: row[0] || "",
        shipper: row[1] || "",
        shipperPhone: row[2] || "",
        receiver: row[3] || "",
        receiverPhone: row[4] || "",
        address: row[5] || "",
      });
      added += 1;
    }
    saveState();
    render();
    alert(`已导入 ${added} 条客户单位资料`);
  };
  reader.readAsText(file, "utf-8");
}

function addOption(key, value) {
  const cleanValue = String(value || "").trim();
  if (!cleanValue) return;
  state.options[key] = unique([...(state.options[key] || []), cleanValue]);
  saveState();
  render();
}

function switchView(view) {
  const titleMap = {
    dashboard: "运营总览",
    shipments: "运单中心",
    operations: "操作中心",
    booking: "订舱中心",
    payments: "财务核销",
    customers: "应收帐款",
    finance: "费用报表",
    accounts: "账户流水",
    settings: "基础资料",
  };
  els.navItems.forEach((btn) => btn.classList.toggle("active", btn.dataset.view === view));
  els.views.forEach((section) => section.classList.toggle("active", section.id === `${view}View`));
  els.viewTitle.textContent = titleMap[view] || "运营总览";
}

function formToObject(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function fillForm(form, data) {
  [...form.elements].forEach((el) => {
    if (!el.name) return;
    el.value = data?.[el.name] ?? "";
  });
}

function openShipment(data = null) {
  fillForm(els.shipmentForm, {
    ...moneyFieldDefaults(),
    date: today(),
    type: "出货",
    currency: "RMB",
    unitPriceCurrency: "RMB",
    costStatus: "未结算N/P",
    shipmentStatus: "新货入仓",
    ...data,
  });
  ensureMainMeasurementFields(els.shipmentForm, data || {});
  ensureDefaultUnitPriceCurrency(els.shipmentForm);
  const cargoRows = legacyCargoLines(data || {});
  renderCargoLines(cargoRows);
  if (!hasCargoMeasurementRows(cargoRows)) syncCargoSummaryFromMainFields(els.shipmentForm);
  autoFillChargeWeight(els.shipmentForm);
  updateShipmentCostSummary();
  const detailTrackBtn = document.querySelector("#shipmentDetailTrackBtn");
  const detailPodBtn = document.querySelector("#shipmentDetailPodBtn");
  [detailTrackBtn, detailPodBtn].forEach((btn) => {
    if (!btn) return;
    btn.disabled = !data?.id;
    btn.title = data?.id ? "" : "保存登记后可查看";
  });
  if (detailTrackBtn) detailTrackBtn.dataset.trackShipment = data?.id || "";
  if (detailPodBtn) detailPodBtn.dataset.podShipment = data?.id || "";
  els.shipmentDialog.showModal();
}

function openShipmentSection(shipmentId, sectionTarget) {
  const shipment = state.shipments.find((s) => s.id === shipmentId);
  if (!shipment) return;
  openShipment(shipment);
  requestAnimationFrame(() => {
    const section = sectionTarget === "cost"
      ? els.shipmentDialog.querySelector(".cost-section:not(.receivable-section)")
      : els.shipmentDialog.querySelector(".receivable-section");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function openPayment(data = null) {
  fillForm(els.paymentForm, {
    date: today(),
    currency: "RMB",
    rate: 1,
    method: "按运单核销",
    ...data,
  });
  if (!data?.id) {
    if (!els.paymentForm.currency.value) els.paymentForm.currency.value = "RMB";
    applyPaymentCustomerCurrency(els.paymentForm);
    syncPaymentRate(els.paymentForm);
  }
  autofillPaymentFromWaybill(els.paymentForm);
  els.paymentDialog.showModal();
}

function shipmentSummaryHtml(shipment) {
  return `
    <strong>${escapeHtml(shipment.customer || shipment.mark || "未填写客户")}</strong>
    <span>主单号：${escapeHtml(shipment.masterNo || "-")}</span>
    <span>运单号：${escapeHtml(shipment.waybill || "-")}</span>
    <span>当前状态：${escapeHtml(shipment.shipmentStatus || "新货入仓")}</span>
  `;
}

function openTracking(shipmentId) {
  const shipment = state.shipments.find((s) => s.id === shipmentId);
  if (!shipment || !els.trackingDialog) return;
  els.trackingForm.reset();
  els.trackingForm.shipmentId.value = shipment.id;
  els.trackingForm.trackDate.value = today();
  els.trackingForm.shipmentStatus.value = normalizeTrackingStatus(shipment.shipmentStatus || "新货入仓");
  els.trackingSummary.innerHTML = shipmentSummaryHtml(shipment);
  renderTrackingHistory(shipment);
  els.trackingDialog.showModal();
}

function normalizeTrackingStatus(status) {
  return SHIPMENT_STATUS_OPTIONS.includes(status) ? status : "新货入仓";
}

function nextTrackingStatus(status) {
  const currentIndex = SHIPMENT_STATUS_OPTIONS.indexOf(normalizeTrackingStatus(status));
  if (currentIndex < 0 || currentIndex >= SHIPMENT_STATUS_OPTIONS.length - 1) return "已签收";
  return SHIPMENT_STATUS_OPTIONS[currentIndex + 1];
}

function renderTrackingHistory(shipment) {
  const history = Array.isArray(shipment.statusHistory) ? shipment.statusHistory : [];
  const rows = history.length ? history : [{
    date: shipment.date || "",
    status: shipment.shipmentStatus || "新货入仓",
  }];
  els.trackingHistoryRows.innerHTML = rows.map((row) => `
    <div class="timeline-item">
      <span>${escapeHtml(row.date || "")}</span>
      <strong>${escapeHtml(row.status || "")}</strong>
    </div>
  `).join("");
}

function saveTracking(event) {
  event.preventDefault();
  const data = formToObject(els.trackingForm);
  const shipment = state.shipments.find((s) => s.id === data.shipmentId);
  if (!shipment) return;
  const status = normalizeTrackingStatus(data.shipmentStatus || "新货入仓");
  shipment.shipmentStatus = status;
  shipment.statusHistory = Array.isArray(shipment.statusHistory) ? shipment.statusHistory : [];
  shipment.statusHistory.push({
    date: data.trackDate || today(),
    status,
  });
  saveState();
  render();
  els.trackingSummary.innerHTML = shipmentSummaryHtml(shipment);
  renderTrackingHistory(shipment);
  if (status === "已签收") {
    alert("货物已经完成派送");
    return;
  }
  els.trackingForm.shipmentStatus.value = nextTrackingStatus(status);
}

function openPodRecord(shipmentId) {
  const shipment = state.shipments.find((s) => s.id === shipmentId);
  if (!shipment || !els.podDialog) return;
  els.podForm.reset();
  els.podForm.shipmentId.value = shipment.id;
  els.podForm.podDate.value = today();
  els.podSummary.innerHTML = shipmentSummaryHtml(shipment);
  renderPodRecords(shipment);
  els.podDialog.showModal();
}

function renderPodRecords(shipment) {
  const rows = Array.isArray(shipment.podRecords) ? shipment.podRecords : [];
  const latest = rows[rows.length - 1];
  if (els.podFileStatus) {
    els.podFileStatus.innerHTML = latest
      ? `<span class="pod-uploaded-text">签收单已上传</span><button type="button" class="pod-file-link" data-pod-view="${escapeHtml(shipment.id)}">点击查看</button><button type="button" class="pod-file-link danger" data-pod-delete="${escapeHtml(shipment.id)}">删除</button>`
      : `<span class="pod-upload-button">选择上传文件</span>`;
    els.podFileStatus.closest(".pod-file-field")?.classList.toggle("has-pod-file", Boolean(latest));
  }
  if (els.podRecordRows) els.podRecordRows.innerHTML = "";
}

function readPodFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function savePodRecord(event) {
  event.preventDefault();
  const data = formToObject(els.podForm);
  const shipment = state.shipments.find((s) => s.id === data.shipmentId);
  if (!shipment) return;
  const file = els.podForm.podFile?.files?.[0];
  if (!file) {
    alert("请选择上传文件");
    return;
  }
  if (!file.type.startsWith("image/")) {
    alert("请上传图片格式的签收单");
    return;
  }
  const fileData = await readPodFile(file);
  shipment.podRecords = Array.isArray(shipment.podRecords) ? shipment.podRecords : [];
  shipment.podRecords.push({
    date: data.podDate || today(),
    fileName: file.name || "签收单",
    fileType: file.type,
    fileData,
  });
  shipment.shipmentStatus = "已签收";
  shipment.statusHistory = Array.isArray(shipment.statusHistory) ? shipment.statusHistory : [];
  shipment.statusHistory.push({
    date: data.podDate || today(),
    status: "已签收",
    note: file.name || "签收单",
  });
  saveState();
  els.podDialog.close();
  render();
}

function openPodPreview(shipmentId) {
  const shipment = state.shipments.find((s) => s.id === shipmentId);
  const rows = Array.isArray(shipment?.podRecords) ? shipment.podRecords : [];
  const latest = rows[rows.length - 1];
  if (!latest?.fileData || !String(latest.fileType || "").startsWith("image/")) {
    alert("这条签收记录没有可预览的图片，请重新上传图片签收单。");
    return;
  }
  if (els.podPreviewImage) els.podPreviewImage.src = latest.fileData;
  els.podPreviewDialog?.showModal();
}

function deletePodRecord(shipmentId) {
  const shipment = state.shipments.find((s) => s.id === shipmentId);
  if (!shipment || !confirm("确认删除已上传的签收单吗？")) return;
  shipment.podRecords = [];
  if (els.podFileInput) els.podFileInput.value = "";
  saveState();
  renderPodRecords(shipment);
  render();
}

function findShipmentByWaybill(waybill) {
  return state.shipments.find((shipment) => matchesShipmentReference(waybill, shipment)) || null;
}

function paymentReferenceKeys(reference) {
  const shipment = findShipmentByWaybill(reference);
  return unique([reference, shipment?.waybill, shipment?.masterNo].map(normalizeReference));
}

function duplicatePaymentForReference(reference, ignoreId = "") {
  const keys = paymentReferenceKeys(reference);
  if (!keys.length) return null;
  return state.payments.find((payment) => {
    if (ignoreId && payment.id === ignoreId) return false;
    const paymentKeys = unique([
      ...paymentReferenceKeys(payment.waybill),
      ...paymentReferenceKeys(payment.masterNo),
    ]);
    return paymentKeys.some((key) => keys.includes(key));
  }) || null;
}

function warnDuplicatePayment(reference, duplicate) {
  const target = reference || duplicate?.waybill || duplicate?.masterNo || "";
  alert(`该票货已登记回款核销，不能重复录入。\n主单号/运单号：${target}`);
}

function blockPaymentWhenSettled(reference, ignoreId = "") {
  const shipment = findShipmentByWaybill(reference);
  if (!shipment) return false;
  const st = settlement(shipment, ignoreId);
  if (st.open > 0.009) return false;
  const target = reference || shipment.waybill || shipment.masterNo || "";
  alert(`该票货未收款已为 0，不能重复录入回款。\n主单号/运单号：${target}`);
  return true;
}

function autofillPaymentFromWaybill(form) {
  const shipment = findShipmentByWaybill(form.waybill?.value);
  if (!shipment) return;
  const st = settlement(shipment);
  if (form.customer && !form.customer.value) form.customer.value = shipment.customer || "";
  if (form.amount && !form.amount.value) form.amount.value = st.open > 0 ? st.open.toFixed(2) : receivable(shipment).toFixed(2);
  if (form.currency) form.currency.value = paymentCurrencyForCustomer(form.customer?.value || shipment.customer);
  if (form.rate) syncPaymentRate(form);
  if (form.note && !form.note.value) form.note.value = `应收${money(st.shouldReceive)}，未收${money(st.open)}`;
}

function findHabitualShipment(customer, mark, currentId = "") {
  const targetCustomer = normalizeText(customer);
  const targetMark = normalizeText(mark);
  const matches = state.shipments
    .filter((shipment) => shipment.id !== currentId)
    .filter((shipment) => {
      const sameCustomer = targetCustomer && normalizeText(shipment.customer) === targetCustomer;
      const sameMark = targetMark && normalizeText(shipment.mark) === targetMark;
      return sameCustomer || sameMark;
    })
    .sort((a, b) => String(b.date).localeCompare(String(a.date)));
  return matches[0] || null;
}

const CUSTOMER_LINKED_FIELDS = [
  "customerAddress",
  "receiverPhone",
  "mark",
  "channel",
  "origin",
  "destination",
  "mode",
  "unitPrice",
  "unitPriceCurrency",
  "terms",
  "salesPerson",
];

function ensureDefaultUnitPriceCurrency(form) {
  if (form?.unitPriceCurrency && !form.unitPriceCurrency.value) {
    form.unitPriceCurrency.value = "RMB";
  }
}

function applyHabitualOptions(form, force = false) {
  const sample = findHabitualShipment(form.customer?.value, force ? "" : form.mark?.value, form.id?.value);
  const profile = findProfileByCustomer(form.customer?.value);
  if (!sample && !profile) {
    ensureDefaultUnitPriceCurrency(form);
    return false;
  }
  const fillValue = (name, value) => {
    if (form[name] && (force || !form[name].value) && value !== undefined && value !== null) {
      form[name].value = value;
    }
  };
  fillValue("customerAddress", sample?.customerAddress || profile?.address);
  fillValue("receiverPhone", sample?.receiverPhone || profile?.receiverPhone || profile?.shipperPhone);
  fillValue("mark", sample?.mark || profile?.mark);
  fillValue("channel", sample?.channel);
  fillValue("origin", sample?.origin);
  fillValue("destination", sample?.destination);
  fillValue("mode", sample?.mode);
  fillValue("unitPrice", sample?.unitPrice);
  fillValue("unitPriceCurrency", sample?.unitPriceCurrency || "RMB");
  fillValue("terms", sample?.terms);
  fillValue("salesPerson", sample?.salesPerson);
  ensureDefaultUnitPriceCurrency(form);
  autoGenerateWaybill(form);
  return true;
}

function clearCustomerLinkedFields(form) {
  CUSTOMER_LINKED_FIELDS.forEach((name) => {
    if (form[name]) form[name].value = "";
  });
  ensureDefaultUnitPriceCurrency(form);
}

function handleCustomerUnitChange(form) {
  if (!form.customer) return;
  if (!String(form.customer.value || "").trim()) {
    clearCustomerLinkedFields(form);
    return;
  }
  if (!applyHabitualOptions(form, true)) clearCustomerLinkedFields(form);
}

function cleanWaybillPrefix(value) {
  return String(value || "").toUpperCase().replace(/[^A-Z]/g, "");
}

function destinationWaybillRule(destination, mark) {
  const text = String(destination || "").toUpperCase();
  const markPrefix = cleanWaybillPrefix(mark);
  if (text.includes("KSA") || text.includes("RUH") || text.includes("JED") || text.includes("沙特") || text.includes("利雅得") || text.includes("吉达")) {
    return { prefix: "KSAS", base: 9900002 };
  }
  if (text.includes("DXB") || text.includes("DUBAI") || text.includes("ARE") || text.includes("UAE") || text.includes("迪拜") || text.includes("阿联酋")) {
    return { prefix: "ARED", base: 8800001 };
  }
  const fallback = markPrefix && markPrefix.length <= 4 ? markPrefix : "SHIP";
  return { prefix: fallback, base: 8000001 };
}

function isSystemGeneratedWaybill(waybill) {
  const text = String(waybill || "").trim().toUpperCase();
  return /^(ARED|KSAS|SHIP)\d{7}$/.test(text);
}

function nextGeneratedWaybillFromPool(destination, mark, pool) {
  const { prefix, base } = destinationWaybillRule(destination, mark);
  const numbers = pool
    .map((shipment) => String(shipment.waybill || "").toUpperCase())
    .filter((waybill) => waybill.startsWith(prefix))
    .map((waybill) => Number(waybill.slice(prefix.length)))
    .filter((num) => Number.isFinite(num));
  const next = numbers.length ? Math.max(...numbers) + 11 : base;
  return `${prefix}${String(next).padStart(7, "0")}`;
}

function nextGeneratedWaybill(destination, mark) {
  return nextGeneratedWaybillFromPool(destination, mark, state.shipments);
}

function normalizeShipmentReferenceFields(shipment, pool = state.shipments) {
  const record = { ...shipment };
  const currentWaybill = String(record.waybill || "").trim();
  if (currentWaybill && !isSystemGeneratedWaybill(currentWaybill)) {
    if (!record.masterNo) record.masterNo = currentWaybill;
    record.waybill = "";
  }
  if (!record.waybill && String(record.destination || "").trim()) {
    record.waybill = nextGeneratedWaybillFromPool(record.destination, record.mark || "", pool);
  }
  return record;
}

function migrateShipmentReferences() {
  let changed = false;
  const migrated = [];
  for (const shipment of state.shipments) {
    const normalized = normalizeShipmentReferenceFields(shipment, migrated);
    if (JSON.stringify(normalized) !== JSON.stringify(shipment)) changed = true;
    migrated.push(normalized);
  }
  if (changed) {
    state.shipments = migrated;
    saveState();
  }
}

function autoGenerateWaybill(form) {
  if (!form.waybill || form.waybill.value.trim()) return;
  const destination = form.destination?.value || "";
  if (!destination.trim()) return;
  form.waybill.value = nextGeneratedWaybill(destination, form.mark?.value || "");
}

function chargeWeightByBubble(actual, volume, bubbleMode = "full") {
  const actualWeight = number(actual);
  const volumeWeight = number(volume);
  if (actualWeight <= 0 && volumeWeight <= 0) return 0;
  if (volumeWeight <= actualWeight) return actualWeight;
  const bubble = volumeWeight - actualWeight;
  if (bubbleMode === "1/2") return actualWeight + bubble / 2;
  if (bubbleMode === "1/3") return actualWeight + bubble / 3;
  if (bubbleMode === "2/3") return actualWeight + bubble * 2 / 3;
  return volumeWeight;
}

function roundedCargoChargeWeight(actual, volume, bubbleMode = "full") {
  const value = chargeWeightByBubble(actual, volume, bubbleMode);
  return value > 0 ? Math.ceil(value) : 0;
}

function autoFillChargeWeight(form) {
  const weightInput = form.querySelector('[name="weight"]');
  const volumeInput = form.querySelector('[name="volumeWeight"]');
  const chargeInput = form.querySelector('[name="chargeWeight"]');
  if (!weightInput || !volumeInput || !chargeInput) return;
  const actual = number(weightInput.value);
  const volume = number(volumeInput.value);
  const suggested = chargeWeightByBubble(actual, volume, form.bubbleMode?.value || "full");
  if (suggested <= 0) return;
  const current = number(chargeInput.value);
  const previousAuto = number(chargeInput.dataset.autoValue);
  if (!chargeInput.value || current <= 0 || current === previousAuto || current === actual || current === volume) {
    chargeInput.value = suggested.toFixed(2);
    chargeInput.dataset.autoValue = String(suggested);
  }
  if (form === els.shipmentForm) updateShipmentCostSummary();
}

function isSeaShipment(form) {
  const text = `${form.mode?.value || ""} ${form.destination?.value || ""}`.toLowerCase();
  return text.includes("sea") || text.includes("海运") || text.includes("海");
}

function volumeForCargoLine(line, form) {
  const length = number(line.length);
  const width = number(line.width);
  const height = number(line.height);
  const ctn = number(line.ctn);
  if (!length || !width || !height || !ctn) return 0;
  if (isSeaShipment(form)) return (length / 100) * (width / 100) * (height / 100) * ctn;
  return (length * width * height / 6000) * ctn;
}

function blankCargoLine() {
  return { box: "", name: "", ctn: "", length: "", width: "", height: "", volume: "" };
}

function cartonCountFromBoxText(value = "") {
  const text = String(value)
    .replace(/[，；、]/g, ",")
    .replace(/[－—–~～]/g, "-");
  if (!text.trim()) return 0;
  let count = 0;
  const rangePattern = /(\d+)\s*(?:-|至|到)\s*(\d+)/g;
  const leftovers = text.replace(rangePattern, (_, start, end) => {
    const first = Number(start);
    const last = Number(end);
    if (Number.isFinite(first) && Number.isFinite(last)) {
      count += Math.abs(last - first) + 1;
    }
    return " ";
  });
  const singles = leftovers.match(/\d+/g) || [];
  return count + singles.length;
}

function syncCargoCtnFromBox() {
  els.cargoLinesBody?.querySelectorAll(".cargo-line-row").forEach((row) => {
    const boxInput = row.querySelector('[data-cargo-field="box"]');
    const ctnInput = row.querySelector('[data-cargo-field="ctn"]');
    if (!boxInput || !ctnInput) return;
    const count = cartonCountFromBoxText(boxInput.value);
    if (count > 0) ctnInput.value = String(count);
  });
}

function parseCargoLinesJson(value) {
  if (!value) return [];
  try {
    const rows = JSON.parse(value);
    return Array.isArray(rows) ? rows : [];
  } catch {
    return [];
  }
}

function legacyCargoLines(data = {}) {
  const saved = parseCargoLinesJson(data.cargoLinesJson);
  if (saved.length) return saved;

  const productRows = [1, 2, 3].map((index) => ({
    box: data[`cargoItem${index}Box`] || "",
    name: data[`cargoItem${index}Name`] || "",
    ctn: data[`cargoItem${index}Ctn`] || "",
    length: data[`carton${index}Length`] || "",
    width: data[`carton${index}Width`] || "",
    height: data[`carton${index}Height`] || "",
    volume: "",
  })).filter((row) => row.name || row.ctn || row.length || row.width || row.height);
  if (productRows.length) return productRows;

  const cartonRows = [1, 2].map((index) => ({
    box: "",
    name: data.cargoName || data.description || "",
    ctn: data[`carton${index}Ctn`] || "",
    length: data[`carton${index}Length`] || "",
    width: data[`carton${index}Width`] || "",
    height: data[`carton${index}Height`] || "",
    volume: "",
  })).filter((row) => row.ctn || row.length || row.width || row.height);
  if (cartonRows.length) return cartonRows;

  if (data.cargoName || data.description || data.cargoCtn || data.ctn) {
    return [{ box: "", name: data.cargoName || data.description || "", ctn: data.cargoCtn || data.ctn || "", length: "", width: "", height: "", volume: "" }];
  }
  return [blankCargoLine()];
}

function cargoLineRowHtml(row = blankCargoLine()) {
  return `
    <div class="cargo-line-row">
      <input data-cargo-field="box" value="${escapeHtml(row.box || "")}">
      <input data-cargo-field="name" value="${escapeHtml(row.name || "")}">
      <input data-cargo-field="ctn" type="number" step="1" min="0" value="${escapeHtml(row.ctn || "")}">
      <input data-cargo-field="length" type="number" step="0.01" min="0" value="${escapeHtml(row.length || "")}">
      <input data-cargo-field="width" type="number" step="0.01" min="0" value="${escapeHtml(row.width || "")}">
      <input data-cargo-field="height" type="number" step="0.01" min="0" value="${escapeHtml(row.height || "")}">
      <input data-cargo-field="volume" class="cargo-line-volume" type="number" step="0.01" min="0" readonly value="${escapeHtml(row.volume || "")}">
      <button type="button" class="cargo-line-remove" title="删除这一行">×</button>
    </div>
  `;
}

function renderCargoLines(lines = [blankCargoLine()]) {
  if (!els.cargoLinesBody) return;
  const safeLines = lines.length ? lines : [blankCargoLine()];
  els.cargoLinesBody.innerHTML = safeLines.map(cargoLineRowHtml).join("");
  calculateVolumeFromCarton(els.shipmentForm, { promptForMainCharge: false });
}

function hasCargoMeasurementRows(rows = []) {
  return rows.some((row) => number(row.ctn) && number(row.length) && number(row.width) && number(row.height));
}

function syncCargoSummaryFromMainFields(form) {
  if (!form) return;
  const ctn = number(form.ctn?.value);
  const actual = number(form.weight?.value);
  const volume = number(form.volumeWeight?.value);
  const charge = number(form.chargeWeight?.value);
  if (form.cargoCtn) form.cargoCtn.value = ctn ? String(ctn) : "";
  if (form.cargoWeight) form.cargoWeight.value = actual ? actual.toFixed(2) : "";
  if (form.cargoVolumeWeight) form.cargoVolumeWeight.value = volume ? volume.toFixed(2) : "";
  if (form.cargoChargeWeight) form.cargoChargeWeight.value = charge ? charge.toFixed(2) : "";
  if (els.cargoTotalCtn) els.cargoTotalCtn.textContent = String(ctn || 0);
  if (els.cargoTotalActual) els.cargoTotalActual.textContent = actual ? actual.toFixed(2) : "0.00";
  if (els.cargoTotalVolume) els.cargoTotalVolume.textContent = volume ? volume.toFixed(2) : "0.00";
  if (els.cargoTotalCharge) els.cargoTotalCharge.textContent = charge ? charge.toFixed(2) : "0.00";
}

function ensureMainMeasurementFields(form, data = {}) {
  if (!form || !data) return;
  [
    ["ctn", ["ctn", "cargoCtn"]],
    ["weight", ["weight", "cargoWeight"]],
    ["volumeWeight", ["volumeWeight", "cargoVolumeWeight"]],
    ["chargeWeight", ["chargeWeight", "cargoChargeWeight"]],
  ].forEach(([field, keys]) => {
    const input = form[field];
    if (!input || String(input.value || "").trim()) return;
    const value = keys
      .map((key) => data[key])
      .find((item) => item !== undefined && item !== null && String(item).trim() !== "");
    if (value !== undefined) input.value = String(value);
  });
}

function collectCargoLinesFromDom(form) {
  if (!els.cargoLinesBody) return [];
  return [...els.cargoLinesBody.querySelectorAll(".cargo-line-row")].map((row) => {
    const get = (field) => row.querySelector(`[data-cargo-field="${field}"]`)?.value || "";
    return {
      box: get("box"),
      name: get("name"),
      ctn: get("ctn"),
      length: get("length"),
      width: get("width"),
      height: get("height"),
      volume: get("volume"),
    };
  }).filter((row) => row.box || row.name || number(row.ctn) || number(row.length) || number(row.width) || number(row.height) || number(row.volume));
}

function cartonSizeText(rows) {
  return rows.map((row) => `${row.box ? `${row.box} ` : ""}${row.name ? `${row.name} ` : ""}${row.length}x${row.width}x${row.height}cm/${row.ctn}件`).join("; ");
}

function updateCargoTotals(form, rows = collectCargoLinesFromDom(form), volumeTotal = 0) {
  const hasMeasurements = hasCargoMeasurementRows(rows);
  const ctnTotal = hasMeasurements ? rows.reduce((sum, row) => sum + number(row.ctn), 0) : number(form.ctn?.value);
  const actual = number(form.weight?.value || form.cargoWeight?.value);
  const volume = hasMeasurements
    ? (volumeTotal || rows.reduce((sum, row) => sum + volumeForCargoLine(row, form), 0))
    : number(form.volumeWeight?.value);
  const charge = hasMeasurements
    ? roundedCargoChargeWeight(actual, volume, form.bubbleMode?.value || "full")
    : number(form.chargeWeight?.value);
  if (form.cargoChargeWeight) {
    form.cargoChargeWeight.value = charge ? charge.toFixed(2) : "";
    form.cargoChargeWeight.dataset.autoValue = String(charge || "");
  }
  if (els.cargoTotalCtn) els.cargoTotalCtn.textContent = String(ctnTotal || 0);
  if (els.cargoTotalActual) els.cargoTotalActual.textContent = actual ? actual.toFixed(2) : "0.00";
  if (els.cargoTotalVolume) els.cargoTotalVolume.textContent = volume ? volume.toFixed(2) : "0.00";
  if (els.cargoTotalCharge) els.cargoTotalCharge.textContent = charge ? charge.toFixed(2) : "0.00";
}

function maybeAdoptCargoChargeWeight(form, cargoCharge) {
  const chargeInput = form.chargeWeight;
  if (!chargeInput || !cargoCharge) return;
  const actual = number(form.weight?.value || form.cargoWeight?.value);
  const current = number(chargeInput.value);
  if (!chargeInput.value || current <= 0) {
    chargeInput.value = cargoCharge.toFixed(2);
    chargeInput.dataset.autoValue = String(cargoCharge);
    return;
  }
  if (cargoCharge <= actual || Math.abs(cargoCharge - current) < 0.01) return;
  const key = `${current.toFixed(2)}|${cargoCharge.toFixed(2)}`;
  if (chargeInput.dataset.cargoMismatchKey === key) return;
  chargeInput.dataset.cargoMismatchKey = key;
  const ok = window.confirm(`箱规明细计算出的计费重为 ${cargoCharge.toFixed(2)}，与前面填写的计费重 ${current.toFixed(2)} 不一致。是否改用箱规明细计费重？`);
  if (ok) {
    chargeInput.value = cargoCharge.toFixed(2);
    chargeInput.dataset.autoValue = String(cargoCharge);
  }
}

function calculateVolumeFromCarton(form, options = {}) {
  syncCargoCtnFromBox();
  const rows = collectCargoLinesFromDom(form);
  if (!rows.length) {
    syncCargoSummaryFromMainFields(form);
    updateCargoTotals(form, [], 0);
    return;
  }
  const value = rows.reduce((sum, row) => sum + volumeForCargoLine(row, form), 0);
  rows.forEach((line, index) => {
    const volume = volumeForCargoLine(line, form);
    const input = els.cargoLinesBody?.querySelectorAll('[data-cargo-field="volume"]')[index];
    if (input) input.value = volume > 0 ? volume.toFixed(2) : "";
    line.volume = volume > 0 ? volume.toFixed(2) : "";
  });
  if (value > 0) {
    if (form.cargoVolumeWeight) form.cargoVolumeWeight.value = value.toFixed(2);
    if (form.cartonSize) form.cartonSize.value = cartonSizeText(rows);
    const ctnTotal = rows.reduce((sum, row) => sum + number(row.ctn), 0);
    if (form.cargoCtn) form.cargoCtn.value = String(ctnTotal);
    if (form.ctn && (!form.ctn.value || number(form.ctn.value) === number(form.ctn.dataset.autoCargoCtn))) {
      form.ctn.value = String(ctnTotal);
      form.ctn.dataset.autoCargoCtn = String(ctnTotal);
    }
    if (form.cargoLinesJson) form.cargoLinesJson.value = JSON.stringify(rows);
    if (form.volumeWeight) {
      const currentAuto = number(form.volumeWeight.dataset.autoCartonVolume);
      if (!form.volumeWeight.value || number(form.volumeWeight.value) === currentAuto) {
        form.volumeWeight.value = value.toFixed(2);
        form.volumeWeight.dataset.autoCartonVolume = String(value);
      }
    }
    const cargoCharge = roundedCargoChargeWeight(number(form.weight?.value || form.cargoWeight?.value), value, form.bubbleMode?.value || "full");
    if (options.promptForMainCharge) maybeAdoptCargoChargeWeight(form, cargoCharge);
  } else if (!hasCargoMeasurementRows(rows)) {
    if (form.cartonSize) form.cartonSize.value = "";
    if (form.cargoLinesJson) form.cargoLinesJson.value = JSON.stringify(rows);
    syncCargoSummaryFromMainFields(form);
  } else {
    if (form.cargoVolumeWeight) form.cargoVolumeWeight.value = "";
    if (form.cargoCtn) form.cargoCtn.value = "";
    if (form.cartonSize) form.cartonSize.value = "";
    if (form.cargoLinesJson) form.cargoLinesJson.value = JSON.stringify(rows);
  }
  updateCargoTotals(form, rows, value);
}

function openCustomer(data = null) {
  fillForm(els.customerForm, data || {});
  els.customerDialog.showModal();
}

function openStatementDialog() {
  fillForm(els.statementForm, {
    month: today().slice(0, 7),
    issueDate: today(),
    destination: "DXB",
    route: "CN-DXB/KSA",
    titleType: "air",
  });
  els.statementDialog.showModal();
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function matchesStatementCustomer(shipment, customer) {
  const target = normalizeText(customer);
  if (!target) return false;
  return [shipment.customer, shipment.mark].some((value) => {
    const text = normalizeText(value);
    return text && (text === target || text.includes(target) || target.includes(text));
  });
}

function shipmentsForStatement(customer, month) {
  return state.shipments
    .filter((shipment) => matchesStatementCustomer(shipment, customer))
    .filter((shipment) => String(shipment.date || "").startsWith(month))
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
}

function formatStatementDate(value) {
  if (!value) return "";
  const [year, month, day] = String(value).slice(0, 10).split("-");
  if (!year || !month || !day) return value;
  return `${day}/${month}/${year}`;
}

function issueDateText(value) {
  if (!value) return "";
  const [year, month, day] = String(value).slice(0, 10).split("-");
  return `${Number(year)}.${Number(month)}.${Number(day)}`;
}

function feeDetail(shipment, titleType) {
  if (titleType === "sea") return "海运双清";
  if (titleType === "mixed") return shipment.mode || "物流费用";
  const mode = String(shipment.mode || "");
  if (mode.includes("沙特") || String(shipment.destination || "").includes("KSA")) return "沙特双清";
  if (mode.includes("海")) return "海运双清";
  return "迪拜双清";
}

function statementTitle(titleType) {
  if (titleType === "sea") return ["海运费账单", "Sea freight statement"];
  if (titleType === "mixed") return ["物流费用账单", "Logistics statement"];
  return ["空运费账单", "Airfreight statement"];
}

function statementCurrencyForShipments(shipments) {
  return shipments.find((shipment) => shipment.unitPriceCurrency)?.unitPriceCurrency || "RMB";
}

function statementWeightCell(value) {
  const amount = number(value);
  return amount > 0 ? amount : "";
}

function collectStatementData() {
  const data = formToObject(els.statementForm);
  const shipments = shipmentsForStatement(data.customer, data.month);
  const currency = statementCurrencyForShipments(shipments);
  const rows = shipments.flatMap((shipment) => {
    const baseRow = {
      date: formatStatementDate(shipment.date),
      waybill: shipment.waybill || "",
      description: shipment.description || "",
      fee: feeDetail(shipment, data.titleType),
      ctn: number(shipment.ctn) || "",
      actualWeight: statementWeightCell(shipment.weight),
      volumeWeight: statementWeightCell(shipment.volumeWeight),
      chargeWeight: number(shipment.chargeWeight),
      unitPrice: amountFromRmb(shipment, amountInRmb(shipment, "unitPrice"), currency) || "",
      total: amountFromRmb(shipment, baseFreightReceivable(shipment), currency),
    };
    const extras = receivableChargeItems(shipment).map((item) => ({
      date: formatStatementDate(shipment.date),
      waybill: shipment.waybill || "",
      description: shipment.chargeNote || shipment.description || "",
      fee: item.label,
      ctn: "",
      actualWeight: "",
      volumeWeight: "",
      chargeWeight: "",
      unitPrice: "",
      total: amountFromRmb(shipment, item.amount, currency),
    }));
    return [baseRow, ...extras];
  });
  return { ...data, currency, rows, total: rows.reduce((sum, row) => sum + number(row.total), 0) };
}

function statementRowsForShipment(shipment, titleType = "air", currency = "RMB") {
  const baseRow = {
    date: formatStatementDate(shipment.date),
    waybill: shipment.masterNo || shipment.waybill || "",
    description: shipment.description || "",
    fee: feeDetail(shipment, titleType),
    ctn: number(shipment.ctn) || "",
    actualWeight: statementWeightCell(shipment.weight),
    volumeWeight: statementWeightCell(shipment.volumeWeight),
    chargeWeight: number(shipment.chargeWeight),
    unitPrice: amountFromRmb(shipment, amountInRmb(shipment, "unitPrice"), currency) || "",
    total: amountFromRmb(shipment, baseFreightReceivable(shipment), currency),
  };
  const extras = receivableChargeItems(shipment).map((item) => ({
    date: formatStatementDate(shipment.date),
    waybill: shipment.masterNo || shipment.waybill || "",
    description: shipment.chargeNote || shipment.description || "",
    fee: item.label,
    ctn: "",
    actualWeight: "",
    volumeWeight: "",
    chargeWeight: "",
    unitPrice: "",
    total: amountFromRmb(shipment, item.amount, currency),
  }));
  return [baseRow, ...extras];
}

function collectSingleShipmentStatement(idValue) {
  const shipment = state.shipments.find((s) => s.id === idValue);
  if (!shipment) return null;
  const titleType = String(shipment.mode || "").includes("海") ? "sea" : "air";
  const currency = shipment.unitPriceCurrency || "RMB";
  const rows = statementRowsForShipment(shipment, titleType, currency);
  return {
    customer: shipment.customer || shipment.mark || "",
    month: String(shipment.date || today()).slice(0, 7),
    issueDate: today(),
    destination: shipment.destination || "",
    route: `${shipment.origin || "CN"}-${shipment.destination || ""}`,
    titleType,
    currency,
    rows,
    total: rows.reduce((sum, row) => sum + number(row.total), 0),
  };
}

function currentCustomerForReceivableExport() {
  const query = document.querySelector("#customerSearch").value.trim();
  const summaries = customerSummary().filter((item) => {
    if (!query) return true;
    return item.customer.toLowerCase().includes(query.toLowerCase());
  });
  if (!summaries.length) {
    alert("没有找到可导出的客户单位应收。请先搜索客户。");
    return "";
  }
  if (!query && summaries.length > 1) {
    alert("请先在搜索框输入客户单位名称，再导出该客户单位账单。");
    return "";
  }
  return summaries[0].customer;
}

function collectCustomerReceivableStatement() {
  const customer = currentCustomerForReceivableExport();
  if (!customer) return null;
  const shipments = state.shipments
    .map((shipment) => ({ ...shipment, ...settlement(shipment) }))
    .filter((shipment) => matchesStatementCustomer(shipment, customer))
    .filter((shipment) => shipment.open > 0.009)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
  const currency = statementCurrencyForShipments(shipments);
  const rows = shipments.map((shipment) => ({
    date: formatStatementDate(shipment.date),
    waybill: shipment.masterNo || shipment.waybill || "",
    description: shipment.description || "",
    fee: "未收款",
    ctn: number(shipment.ctn) || "",
    actualWeight: statementWeightCell(shipment.weight),
    volumeWeight: statementWeightCell(shipment.volumeWeight),
    chargeWeight: number(shipment.chargeWeight),
    unitPrice: amountFromRmb(shipment, amountInRmb(shipment, "unitPrice"), currency) || "",
    total: amountFromRmb(shipment, shipment.open, currency),
  }));
  const lastDate = shipments.reduce((latest, shipment) => String(shipment.date || "") > latest ? String(shipment.date || "") : latest, "");
  return {
    customer,
    month: lastDate ? lastDate.slice(0, 7) : today().slice(0, 7),
    issueDate: today(),
    destination: shipments[0]?.destination || "",
    route: shipments[0] ? `${shipments[0].origin || "CN"}-${shipments[0].destination || ""}` : "",
    titleType: "mixed",
    currency,
    rows,
    total: rows.reduce((sum, row) => sum + number(row.total), 0),
  };
}

function statementDateYmd(value) {
  if (!value) return "";
  const [year, month, day] = String(value).slice(0, 10).split("-");
  if (!year || !month || !day) return String(value || "");
  return `${Number(year)}/${Number(month)}/${Number(day)}`;
}

function compactMoney(value) {
  const text = money(value);
  return text.endsWith(".00") ? text.slice(0, -3) : text;
}

function priceText(currency, value) {
  const amount = number(value);
  if (!amount) return "";
  return `${currency}${compactMoney(amount)}/KG`;
}

function isSignedShipment(shipment) {
  return ["已签收", "完成派送"].includes(shipment.shipmentStatus);
}

function signedDateForShipment(shipment) {
  if (shipment.deliveryDate) return shipment.deliveryDate;
  const history = Array.isArray(shipment.statusHistory) ? shipment.statusHistory : [];
  const signed = [...history].reverse().find((item) => ["已签收", "完成派送"].includes(item.status));
  return signed?.date || "";
}

function splitReceivableStatementRow(shipment, currency) {
  const statementAmount = amountFromRmb(shipment, shipment.shouldReceive, currency);
  const openAmount = amountFromRmb(shipment, shipment.open, currency);
  const unitPrice = amountFromRmb(shipment, amountInRmb(shipment, "unitPrice"), currency);
  return {
    recordingDate: statementDateYmd(shipment.date),
    description: shipment.description || "",
    originalNo: shipment.masterNo || "",
    checkingNo: shipment.waybill || shipment.masterNo || "",
    ctn: number(shipment.ctn) || "",
    quantity: shipment.quantity || shipment.cargoQuantity || 0,
    grossWeight: number(shipment.weight),
    volumeWeight: number(shipment.volumeWeight),
    kgCbm: number(shipment.chargeWeight) || Math.max(number(shipment.weight), number(shipment.volumeWeight)),
    departure: shipment.origin || "",
    destination: shipment.destination || "",
    amount: statementAmount,
    openAmount,
    currency,
    handling: shipment.chargeNote || shipment.note || "",
    price: priceText(currency, unitPrice),
    deliveryDate: isSignedShipment(shipment) ? statementDateYmd(signedDateForShipment(shipment)) : "0",
  };
}

function collectSplitCustomerReceivableStatement() {
  const customer = currentCustomerForReceivableExport();
  if (!customer) return null;
  const shipments = state.shipments
    .map((shipment) => ({ ...shipment, ...settlement(shipment) }))
    .filter((shipment) => matchesStatementCustomer(shipment, customer))
    .filter(shipmentMatchesCustomerLedgerFilters)
    .sort((a, b) => String(a.date).localeCompare(String(b.date)));
  if (!shipments.length) {
    alert("该客户单位当前筛选范围内暂无未收账单可导出。");
    return null;
  }
  const currency = statementCurrencyForShipments(shipments);
  const rows = shipments.map((shipment) => ({
    signed: isSignedShipment(shipment),
    ...splitReceivableStatementRow(shipment, currency),
  }));
  const signedRows = rows.filter((row) => row.signed);
  const unsignedRows = rows.filter((row) => !row.signed);
  const signedTotal = signedRows.reduce((sum, row) => sum + number(row.amount), 0);
  const unsignedTotal = unsignedRows.reduce((sum, row) => sum + number(row.amount), 0);
  const unpaidTotal = rows.reduce((sum, row) => sum + number(row.openAmount), 0);
  const lastDate = shipments.reduce((latest, shipment) => String(shipment.date || "") > latest ? String(shipment.date || "") : latest, "");
  const destination = shipments[0]?.destination || "";
  const year = (lastDate || today()).slice(0, 4);
  return {
    customer,
    currency,
    issueDate: today(),
    month: lastDate ? lastDate.slice(0, 7) : today().slice(0, 7),
    destination,
    route: shipments[0] ? `${shipments[0].origin || ""}-${destination || ""}` : "",
    year,
    signedRows,
    unsignedRows,
    signedTotal,
    unsignedTotal,
    unpaidTotal,
  };
}

function splitStatementRowHtml(row) {
  return `
    <tr class="data-row">
      <td>${escapeHtml(row.recordingDate)}</td>
      <td class="left">${escapeHtml(row.description)}</td>
      <td>${escapeHtml(row.originalNo)}</td>
      <td>${escapeHtml(row.checkingNo)}</td>
      <td>${escapeHtml(row.ctn)}</td>
      <td>${escapeHtml(row.quantity)}</td>
      <td>${money(row.grossWeight)}</td>
      <td>${money(row.volumeWeight)}</td>
      <td>${money(row.kgCbm)}</td>
      <td>${escapeHtml(row.departure)}</td>
      <td>${escapeHtml(row.destination)}</td>
      <td>${money(row.amount)}</td>
      <td>${escapeHtml(row.currency)}</td>
      <td class="handling">${escapeHtml(row.handling)}</td>
      <td>${escapeHtml(row.price)}</td>
      <td>${escapeHtml(row.deliveryDate)}</td>
    </tr>
  `;
}

function splitStatementTableHeaderHtml() {
  return `
    <tr>
      <th>录单时间<br>Recording time</th>
      <th>品名<br>Description</th>
      <th>原单号<br>Original no.</th>
      <th>运单号<br>Checking no</th>
      <th>件数<br>CTN</th>
      <th>计费件数<br>Quantity</th>
      <th>实际重量<br>G.W.(kgs)</th>
      <th>体积重量<br>V.W.(kgs)</th>
      <th>重量/体积<br>KG/CBM</th>
      <th>始发站<br>Departure</th>
      <th>目的站<br>Destination</th>
      <th>金额<br>(SUM)Amount</th>
      <th>币种<br>currency</th>
      <th>储运注意事项<br>Handling information</th>
      <th>价格<br>Price</th>
      <th>签收时间<br>Delivery date</th>
    </tr>
  `;
}

function splitStatementSubtotalHtml(label, amount, currency) {
  return `
    <tr class="subtotal-row">
      <td colspan="11">${escapeHtml(label)}</td>
      <td>${money(amount)}</td>
      <td>${escapeHtml(currency)}</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  `;
}

function splitReceivableStatementHtml(statement, mode = "print") {
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  const signedRows = statement.signedRows.length
    ? statement.signedRows.map(splitStatementRowHtml).join("")
    : `<tr><td colspan="16" class="empty-row">暂无已签收未付款货物</td></tr>`;
  const unsignedRows = statement.unsignedRows.length
    ? statement.unsignedRows.map(splitStatementRowHtml).join("")
    : `<tr><td colspan="16" class="empty-row">暂无未签收未付款货物</td></tr>`;
  const invoiceNo = `${statement.customer}-${statement.year}-${statement.destination || "DXB"}-INVOICE ${statement.currency}${compactMoney(statement.unpaidTotal)}`;
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(statement.customer)}-客户单位分组账单</title>
  <style>
    @page { size: A4 landscape; margin: 8mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "SimSun", "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 297mm; min-height: 210mm; margin: 0 auto; padding: 7mm; background: #fff; }
    .doc-head { display: grid; grid-template-columns: 1fr 2fr 1fr; align-items: start; margin-bottom: 8px; }
    .logo { width: 68mm; max-width: 100%; height: auto; }
    .title { text-align: center; padding-top: 6mm; }
    .title h1 { margin: 0; font-size: 22px; }
    .title div { font-size: 14px; font-weight: 700; margin-top: 3px; }
    .meta { text-align: right; font-size: 11px; line-height: 1.8; padding-top: 7mm; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 9.5px; }
    th, td { border: 1px solid #111827; padding: 4px 3px; text-align: center; vertical-align: middle; line-height: 1.25; word-break: break-word; }
    th { background: #f7f7f7; font-weight: 700; }
    .data-row td { background: #edf5e7; }
    .left { text-align: left; }
    .handling { background: #fff6e6 !important; }
    .subtotal-row td { height: 11mm; background: #fff; font-weight: 800; font-size: 11px; }
    .empty-row { color: #6b7280; height: 10mm; background: #fff; }
    .invoice-no { margin: 10px 0 8px; font-size: 12px; }
    .notice { margin-top: 8px; font-size: 10.5px; line-height: 1.45; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; z-index: 2; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print {
      body { background: #fff; }
      .page { width: auto; min-height: auto; margin: 0; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <header class="doc-head">
      <div>${logo ? `<img class="logo" src="${logo}" alt="SYNTRANX">` : ""}</div>
      <div class="title">
        <h1>${escapeHtml(statement.customer)} 客户单位账单</h1>
        <div>Customer statement</div>
      </div>
      <div class="meta">
        <div>导出日期：${escapeHtml(statementDateYmd(statement.issueDate))}</div>
        <div>币种：${escapeHtml(statement.currency)}</div>
      </div>
    </header>
    <table>
      <colgroup>
        <col style="width: 7.5%"><col style="width: 7%"><col style="width: 9.5%"><col style="width: 7%">
        <col style="width: 5%"><col style="width: 5%"><col style="width: 5.2%"><col style="width: 5.2%">
        <col style="width: 5.2%"><col style="width: 5.2%"><col style="width: 5.2%"><col style="width: 6.8%">
        <col style="width: 5.2%"><col style="width: 10%"><col style="width: 6.2%"><col style="width: 5.8%">
      </colgroup>
      <thead>${splitStatementTableHeaderHtml()}</thead>
      <tbody>
        ${signedRows}
        ${splitStatementSubtotalHtml("已签收货物运费", statement.signedTotal, statement.currency)}
        ${splitStatementTableHeaderHtml()}
        ${unsignedRows}
        ${splitStatementSubtotalHtml("合计未付运费", statement.unpaidTotal, statement.currency)}
      </tbody>
    </table>
    <div class="invoice-no">${escapeHtml(invoiceNo)}</div>
    <section class="notice">
      <div>请于收到账单之日起三日内予以答复，否则视同贵司默认此账单金额。不便之处，敬请谅解。</div>
      <div>Please confirm back the statement within three days, or else we shall consider that as correct. We apologize for any inconvenience.</div>
      <div>如果体积重量大于实际重量，我司将按照体积重量进行收费</div>
      <div>If the volume weight is greater than actual weight, we will charge as per volume weight.</div>
    </section>
  </main>
</body>
</html>`;
}

function statementRowsHtml(rows) {
  return rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.date)}</td>
      <td>${escapeHtml(row.waybill)}</td>
      <td>${escapeHtml(row.description)}</td>
      <td>${escapeHtml(row.fee)}</td>
      <td>${escapeHtml(row.ctn)}</td>
      <td>${row.actualWeight === "" ? "" : money(row.actualWeight)}</td>
      <td>${row.volumeWeight === "" ? "" : money(row.volumeWeight)}</td>
      <td>${row.chargeWeight === "" ? "" : money(row.chargeWeight)}</td>
      <td>${escapeHtml(row.unitPrice)}</td>
      <td>${money(row.total)}</td>
    </tr>
  `).join("");
}

function statementHtml(statement, mode = "print") {
  const [cnTitle, enTitle] = statementTitle(statement.titleType);
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  const currency = statement.currency || "RMB";
  const bankHtml = currency === "AED" ? `
      <div>Company name: SYNTRANX CARGO LLC SOC</div>
      <div>Bank account Number: 14447785920001</div>
      <div>IBAN Number: AE2600300 14447785 920001</div>
      <div>Bank Name: Abu Dhabi Commercial Bank (ADCB)</div>
      <div>Branch Add: Deira Branch Dubai United Arab Emirates</div>
    ` : `
      <div>户名：广州市新创供应链管理有限公司</div>
      <div>账号：3602 2266 0900 0109 645</div>
      <div>开户行：广州开发区分行 /广州经济技术开发区支行</div>
      <div>行号：102581000177</div>
    `;
  const emptyRow = `<tr><td colspan="10" class="empty-line">该客户单位本月暂无账单明细</td></tr>`;
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(statement.customer)}-${escapeHtml(statement.month)}-statement</title>
  <style>
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 12mm; background: #fff; }
    .doc-head { position: relative; min-height: 24mm; margin-bottom: 4px; }
    .logo-wrap { position: absolute; left: 0; top: 0; text-align: left; }
    .logo-wrap img { width: 94.5mm; max-width: 45%; height: auto; }
    h1 { margin: 0; text-align: center; font-size: 24px; padding-top: 8mm; }
    .subtitle { text-align: center; font-size: 17px; font-weight: 700; margin: 4px 0 20px; }
    .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 36px; margin-bottom: 14px; font-size: 14px; }
    .meta div { min-height: 24px; }
    .meta strong { display: inline-block; min-width: 86px; }
    table { width: 100%; border-collapse: collapse; font-size: 11px; }
    th, td { border: 1px solid #111827; padding: 6px 5px; text-align: center; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 800; }
    td.left { text-align: left; }
    .total { display: flex; justify-content: flex-end; padding-right: 1.2%; font-weight: 800; font-size: 14px; margin-top: 10px; }
    .total span { width: 16%; min-width: 44mm; text-align: center; white-space: nowrap; }
    .notice { margin-top: 22px; line-height: 1.65; font-size: 12px; }
    .notice .en { margin-top: 2px; }
    .bank { margin-top: 10px; line-height: 1.7; font-size: 12px; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    .empty-line { color: #697386; padding: 18px; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <section class="doc-head">
      ${logo ? `<div class="logo-wrap"><img src="${logo}" alt="SYNTRANX LOGISTICS"></div>` : ""}
      <h1>${escapeHtml(cnTitle)}</h1>
      <div class="subtitle">${escapeHtml(enTitle)}</div>
    </section>
    <section class="meta">
      <div><strong>客户单位：</strong>${escapeHtml(statement.customer)}</div>
      <div><strong>目的地</strong> ${escapeHtml(statement.destination || "")}</div>
      <div><strong>制单日期：</strong>${escapeHtml(issueDateText(statement.issueDate))}</div>
      <div><strong>航线</strong> ${escapeHtml(statement.route || "")}</div>
    </section>
    <table>
      <colgroup>
        <col style="width: 11%">
        <col style="width: 13%">
        <col style="width: 12%">
        <col style="width: 11%">
        <col style="width: 6%">
        <col style="width: 8%">
        <col style="width: 8%">
        <col style="width: 9%">
        <col style="width: 8%">
        <col style="width: 14%">
      </colgroup>
      <thead>
        <tr>
          <th>日期<br>Date</th>
          <th>货运单号<br>Tracking No</th>
          <th>品名<br>Description</th>
          <th>收费项目<br>Fee Detail</th>
          <th>件数<br>CTN</th>
          <th>实重<br>G.W(KG)</th>
          <th>体积重<br>V.W(KG)</th>
          <th>计费重量<br>C.W(KG)</th>
          <th>单价<br>Unit Price</th>
          <th>总额（${escapeHtml(currency)}）<br>TOTAL</th>
        </tr>
      </thead>
      <tbody>${statement.rows.length ? statementRowsHtml(statement.rows) : emptyRow}</tbody>
    </table>
    <div class="total"><div></div><span>TOTAL: ${escapeHtml(currency)} ${money(statement.total)}</span></div>
    <section class="notice">
      <div>请贵司收到以上发票，尽快核对确认。如无异议，请安排支付款项。谢谢配合。</div>
      <div class="en">Please review and confirm the above invoice upon receipt. If there is no discrepancy, kindly arrange payment accordingly. Thank you for your cooperation.</div>
    </section>
    <section class="bank">
      ${bankHtml}
    </section>
  </main>
</body>
</html>`;
}

function exportStatementPdf() {
  const statement = collectStatementData();
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(statementHtml(statement, "print"));
  printWindow.document.close();
}

function exportStatementExcel() {
  const statement = collectStatementData();
  const html = statementHtml(statement, "excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${statement.customer || "客户"}-${statement.month || "账单"}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function openShipmentBill(idValue) {
  const statement = collectSingleShipmentStatement(idValue);
  if (!statement) return;
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再生成账单。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(statementHtml(statement, "print"));
  printWindow.document.close();
}

function cargoReceiptData() {
  calculateVolumeFromCarton(els.shipmentForm);
  return formToObject(els.shipmentForm);
}

function cargoProductRows(data) {
  const rows = parseCargoLinesJson(data.cargoLinesJson)
    .filter((row) => row.name || row.ctn || row.length || row.width || row.height || row.volume)
    .map((row) => ({
      box: row.box || "",
      name: row.name || "",
      ctn: row.ctn || "",
      length: row.length || "",
      width: row.width || "",
      height: row.height || "",
      volume: row.volume || "",
    }));
  if (rows.length) return rows;
  return [{
    box: "",
    name: data.cargoName || data.description || "",
    ctn: data.cargoCtn || data.ctn || "",
    length: "",
    width: "",
    height: "",
    volume: data.cargoVolumeWeight || data.volumeWeight || "",
  }];
}

function cargoProductRowsHtml(data) {
  return cargoProductRows(data).map((row, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(row.box)}</td>
          <td class="left">${escapeHtml(row.name)}</td>
          <td>${escapeHtml(row.ctn)}</td>
          <td>${escapeHtml(row.length)}</td>
          <td>${escapeHtml(row.width)}</td>
          <td>${escapeHtml(row.height)}</td>
          <td>${escapeHtml(row.volume)}</td>
        </tr>
  `).join("");
}

function cargoReceiptHtml(data, mode = "print") {
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(data.customer || data.mark || "仓库入仓纸 Warehouse Receipt")}-Warehouse Receipt</title>
  <style>
    @page { size: A4; margin: 14mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 14mm; background: #fff; }
    .head { display: grid; grid-template-columns: 1fr 1fr; align-items: start; margin-bottom: 14px; }
    .logo { width: 70mm; max-width: 100%; }
    h1 { margin: 0; text-align: right; font-size: 26px; line-height: 1.15; }
    h1 span { display: block; font-size: 16px; margin-top: 4px; }
    .meta { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px 18px; margin: 14px 0; font-size: 13px; }
    .meta div { border-bottom: 1px solid #d1d5db; padding-bottom: 5px; min-height: 24px; }
    .meta strong { display: inline-block; min-width: 86px; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; margin-top: 12px; }
    th, td { border: 1px solid #111827; padding: 7px 6px; text-align: center; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 800; }
    td.left { text-align: left; }
    .receipt-body { margin-top: 8px; }
    .receipt-body table { margin-top: 10px; table-layout: fixed; }
    .cargo-lines-table th,
    .cargo-lines-table td { height: 12mm; }
    .cargo-summary-table th { height: 11mm; }
    .cargo-summary-table td { height: 8mm; }
    .note { margin-top: 12px; border: 1px solid #111827; min-height: 30mm; padding: 8px; font-size: 12px; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <section class="head">
      <div>${logo ? `<img class="logo" src="${logo}" alt="SYNTRANX LOGISTICS">` : ""}</div>
      <h1>仓库入仓纸<span>Warehouse Receipt</span></h1>
    </section>
    <section class="meta">
      <div><strong>客户单位：</strong>${escapeHtml(data.customer || "")}</div>
      <div><strong>日期：</strong>${escapeHtml(data.date || today())}</div>
      <div><strong>入仓号：</strong>${escapeHtml(data.cargoEntryNo || data.mark || "")}</div>
      <div><strong>主单号：</strong>${escapeHtml(data.masterNo || "")}</div>
      <div><strong>运单号：</strong>${escapeHtml(data.waybill || "")}</div>
      <div><strong>收货方式：</strong>${escapeHtml(data.receivingMethod || "")}</div>
      <div><strong>快递/车牌：</strong>${escapeHtml(data.receivingReference || "")}</div>
      <div><strong>司机联系：</strong>${escapeHtml(data.driverContact || "")}</div>
    </section>
    <section class="receipt-body">
      <table class="cargo-lines-table">
        <thead>
          <tr>
            <th>序号</th>
            <th>箱号</th>
            <th>品名</th>
            <th>件数</th>
            <th>长(cm)</th>
            <th>宽(cm)</th>
            <th>高(cm)</th>
            <th>体积重</th>
          </tr>
        </thead>
        <tbody>${cargoProductRowsHtml(data)}</tbody>
      </table>
      <table class="cargo-summary-table">
        <thead>
          <tr>
            <th>实重</th>
            <th>箱规</th>
            <th>体积重</th>
            <th>计费重</th>
            <th>产品性质</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${escapeHtml(data.cargoWeight || data.weight || "")}</td>
            <td>${escapeHtml(data.cartonSize || "")}</td>
            <td>${escapeHtml(data.cargoVolumeWeight || data.volumeWeight || "")}</td>
            <td>${escapeHtml(data.cargoChargeWeight || data.chargeWeight || "")}</td>
            <td>${escapeHtml(data.productNature || "")}</td>
          </tr>
        </tbody>
      </table>
      <div class="note"><strong>备注：</strong>${escapeHtml(data.cargoDetailNote || "")}</div>
    </section>
  </main>
</body>
</html>`;
}

function exportCargoReceiptPdf() {
  const data = cargoReceiptData();
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(cargoReceiptHtml(data, "print"));
  printWindow.document.close();
}

function exportCargoReceiptExcel() {
  const data = cargoReceiptData();
  const html = cargoReceiptHtml(data, "excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.customer || data.mark || "仓库入仓纸"}-Warehouse Receipt.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function saveShipment(event) {
  event.preventDefault();
  calculateVolumeFromCarton(els.shipmentForm, { promptForMainCharge: true });
  const data = formToObject(els.shipmentForm);
  const existingShipment = data.id ? state.shipments.find((s) => s.id === data.id) : null;
  let record = {
    ...data,
    type: data.type || "出货",
    salesPerson: data.salesPerson || "",
    ctn: number(data.ctn),
    weight: number(data.weight),
    volumeWeight: number(data.volumeWeight),
    chargeWeight: number(data.chargeWeight),
    cargoValue: number(data.cargoValue),
    cargoCtn: number(data.cargoCtn),
    cargoWeight: number(data.cargoWeight),
    cargoLinesJson: data.cargoLinesJson || "[]",
    carton1Length: number(data.carton1Length),
    carton1Width: number(data.carton1Width),
    carton1Height: number(data.carton1Height),
    carton1Ctn: number(data.carton1Ctn),
    carton2Length: number(data.carton2Length),
    carton2Width: number(data.carton2Width),
    carton2Height: number(data.carton2Height),
    carton2Ctn: number(data.carton2Ctn),
    cargoItem1Box: data.cargoItem1Box || "",
    cargoItem1Name: data.cargoItem1Name || "",
    cargoItem1Model: data.cargoItem1Model || "",
    cargoItem1Ctn: number(data.cargoItem1Ctn),
    cargoItem2Box: data.cargoItem2Box || "",
    cargoItem2Name: data.cargoItem2Name || "",
    cargoItem2Model: data.cargoItem2Model || "",
    cargoItem2Ctn: number(data.cargoItem2Ctn),
    cargoItem3Box: data.cargoItem3Box || "",
    cargoItem3Name: data.cargoItem3Name || "",
    cargoItem3Model: data.cargoItem3Model || "",
    cargoItem3Ctn: number(data.cargoItem3Ctn),
    cargoVolumeWeight: number(data.cargoVolumeWeight),
    cargoChargeWeight: number(data.cargoChargeWeight),
    receiverPhone: data.receiverPhone || "",
    aedRate: number(data.aedRate) || number(state.options.rates?.AED) || 1.84,
    usdRate: number(data.usdRate) || number(state.options.rates?.USD) || 6.8,
    unitPrice: number(data.unitPrice),
    unitPriceCurrency: data.unitPriceCurrency || "RMB",
    chargeInsurance: number(data.chargeInsurance),
    chargePickup: number(data.chargePickup),
    chargeDelivery: number(data.chargeDelivery),
    chargeDocument: number(data.chargeDocument),
    chargeRegistration: number(data.chargeRegistration),
    chargeCustoms: number(data.chargeCustoms),
    chargeStorage: number(data.chargeStorage),
    chargeOther: number(data.chargeOther),
    chargeNote: data.chargeNote || "",
    costUnit: number(data.costUnit),
    costFreight: number(data.costFreight),
    costPickup: number(data.costPickup),
    costDelivery: number(data.costDelivery),
    costDocument: number(data.costDocument),
    costRegistration: number(data.costRegistration),
    costCustoms: number(data.costCustoms),
    costStorage: number(data.costStorage),
    costHandling: number(data.costHandling),
    costInsurance: number(data.costInsurance),
    costOther: number(data.costOther),
    costNote: data.costNote || "",
    statusHistory: Array.isArray(existingShipment?.statusHistory) ? existingShipment.statusHistory : [],
    podRecords: Array.isArray(existingShipment?.podRecords) ? existingShipment.podRecords : [],
  };
  record = normalizeShipmentReferenceFields(record, state.shipments.filter((s) => s.id !== record.id));
  rememberShipmentRates(record);
  if (record.salesPerson) {
    state.options.paymentSales = unique([...(state.options.paymentSales || []), record.salesPerson]);
  }
  if (record.id) {
    state.shipments = state.shipments.map((s) => s.id === record.id ? record : s);
  } else {
    record.id = id("s");
    record.statusHistory = [{
      date: record.date || today(),
      status: record.shipmentStatus || "新货入仓",
      note: "新建登记",
    }];
    record.podRecords = [];
    state.shipments.push(record);
  }
  rememberCustomerContact(record);
  saveState();
  els.shipmentDialog.close();
  render();
}

function saveQuickShipment(event) {
  event.preventDefault();
  const data = formToObject(els.quickShipmentForm);
  const record = normalizeShipmentReferenceFields({
    id: id("s"),
    ...moneyFieldDefaults(),
    date: data.date || today(),
    type: "出货",
    channel: data.channel || "",
    customer: data.customer || "",
    customerAddress: data.customerAddress || "",
    receiverPhone: data.receiverPhone || "",
    mark: data.mark || "",
    description: data.description || "",
    masterNo: data.masterNo || "",
    waybill: data.waybill || "",
    origin: data.origin || "",
    destination: data.destination || "",
    mode: data.mode || "",
    ctn: number(data.ctn),
    weight: number(data.weight),
    volumeWeight: number(data.volumeWeight),
    chargeWeight: number(data.chargeWeight),
    cargoCtn: number(data.ctn),
    cargoWeight: number(data.weight),
    cargoVolumeWeight: number(data.volumeWeight),
    cargoChargeWeight: number(data.chargeWeight),
    cargoValue: 0,
    unitPrice: number(data.unitPrice),
    unitPriceCurrency: data.unitPriceCurrency || "RMB",
    chargeInsurance: 0,
    chargePickup: 0,
    chargeDelivery: 0,
    chargeDocument: 0,
    chargeRegistration: 0,
    chargeCustoms: 0,
    chargeStorage: 0,
    chargeOther: 0,
    chargeNote: "",
    costUnit: 0,
    costFreight: 0,
    costPickup: 0,
    costDelivery: 0,
    costDocument: 0,
    costRegistration: 0,
    costCustoms: 0,
    costStorage: 0,
    costHandling: 0,
    costInsurance: 0,
    costOther: 0,
    costNote: "",
    terms: data.terms || "到付票结DDP",
    shipmentStatus: data.shipmentStatus || "新货入仓",
    customsStatus: data.customsStatus || "未开始",
    flightNo: "",
    lastMile: "",
    etd: "",
    eta: "",
    deliveryDate: "",
    costStatus: "未结算N/P",
    statusHistory: [],
    podRecords: [],
    note: data.note || "",
  });
  record.statusHistory = [{
    date: record.date || today(),
    status: record.shipmentStatus || "新货入仓",
    note: "快速录入",
  }];
  record.podRecords = [];
  state.shipments.push(record);
  rememberCustomerContact(record);
  saveState();
  els.quickShipmentForm.reset();
  setQuickDefaults();
  switchView("shipments");
  render();
}

function savePayment(event) {
  event.preventDefault();
  const data = formToObject(els.paymentForm);
  const existing = data.id ? state.payments.find((p) => p.id === data.id) : null;
  const voucherName = els.paymentForm.voucherFile?.files?.[0]?.name || existing?.voucherName || "";
  data.receiveAccount = normalizeAccountName(data.receiveAccount);
  if (blockPaymentWhenSettled(data.waybill, data.id)) return;
  if (!accountOptions().includes(data.receiveAccount)) {
    alert("请选择已审批入册的收款账户。");
    return;
  }
  const record = {
    ...data,
    currency: data.currency || "RMB",
    amount: number(data.amount),
    rate: number(data.rate) || defaultPaymentRate(data.currency || "RMB"),
    voucherName,
  };
  delete record.voucherFile;
  if (record.id) {
    state.payments = state.payments.map((p) => p.id === record.id ? record : p);
  } else {
    record.id = id("p");
    state.payments.push(record);
  }
  if (record.account) {
    state.options.paymentSales = unique([...(state.options.paymentSales || []), record.account]);
  }
  saveState();
  els.paymentDialog.close();
  render();
}

function saveQuickPayment(event) {
  event.preventDefault();
  const data = formToObject(els.quickPaymentForm);
  const voucherName = els.quickPaymentForm.voucherFile?.files?.[0]?.name || "";
  data.receiveAccount = normalizeAccountName(data.receiveAccount);
  if (blockPaymentWhenSettled(data.waybill)) return;
  if (!accountOptions().includes(data.receiveAccount)) {
    alert("请选择已审批入册的收款账户。");
    return;
  }
  const record = {
    id: id("p"),
    date: data.date || today(),
    customer: data.customer || "",
    waybill: data.waybill || "",
    account: data.account || "",
    currency: data.currency || "RMB",
    amount: number(data.amount),
    rate: number(data.rate) || defaultPaymentRate(data.currency || "RMB"),
    receiveAccount: data.receiveAccount || "",
    voucherName,
    method: data.method || "按运单核销",
    note: data.note || "",
  };
  state.payments.push(record);
  if (record.account) {
    state.options.paymentSales = unique([...(state.options.paymentSales || []), record.account]);
  }
  saveState();
  els.quickPaymentForm.reset();
  els.quickPaymentForm.rate.value = 1;
  setQuickDefaults();
  switchView("payments");
  render();
}

function saveCustomer(event) {
  event.preventDefault();
  const record = formToObject(els.customerForm);
  if (record.id) {
    state.profiles = state.profiles.map((p) => p.id === record.id ? record : p);
  } else {
    record.id = id("c");
    state.profiles.push(record);
  }
  saveState();
  els.customerDialog.close();
  render();
}

function saveExpenseDrafts() {
  syncExpenseDraftsFromDom();
  const rowsToSave = expenseDrafts.filter((row) => number(row.amount) > 0 || row.note.trim() || row.account.trim());
  if (!rowsToSave.length) {
    alert("请先填写至少一笔费用。");
    return;
  }
  for (const row of rowsToSave) {
    row.account = normalizeAccountName(row.account);
    if (!accountOptions().includes(row.account)) {
      alert(`支付账户“${row.account || "空白"}”未审批入册，请先在基础资料提交账号申请。`);
      return;
    }
    if (isInternalTransferAccount(row.account)) {
      alert("内部资金调拨请使用上方“内部资金调拨”窗口登记，不要放在费用登记里。");
      return;
    }
    state.expenses.push({
      id: id("e"),
      date: row.date || today(),
      category: row.category || "其他",
      account: row.account || "",
      amount: number(row.amount),
      currency: row.currency || "RMB",
      rate: number(row.rate) || defaultExpenseRate(row.currency || "RMB"),
      voucherName: row.voucherName || "",
      note: row.note || "",
    });
  }
  saveState();
  expenseDrafts = [blankExpenseDraft(), blankExpenseDraft(), blankExpenseDraft()];
  render();
}

function openTransferDialog() {
  const dialog = document.querySelector("#transferDialog");
  const form = document.querySelector("#transferForm");
  if (!dialog || !form) return;
  form.reset();
  form.transferDate.value = today();
  form.currency.value = "RMB";
  form.rate.value = String(defaultExpenseRate("RMB"));
  dialog.showModal();
}

function saveInternalTransfer(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = formToObject(form);
  const fromAccount = normalizeAccountName(data.transferFromAccount);
  const toAccount = normalizeAccountName(data.transferToAccount);
  const validTargets = transferTargetAccountOptions();
  if (!validTargets.includes(fromAccount) || !validTargets.includes(toAccount)) {
    alert("请选择已入册的调出账户和调入账户。");
    return;
  }
  if (fromAccount === toAccount) {
    alert("调出账户和调入账户不能相同。");
    return;
  }
  if (number(data.amount) <= 0) {
    alert("请填写调拨金额。");
    return;
  }
  state.expenses.push({
    id: id("e"),
    date: data.transferDate || today(),
    category: "内部资金调拨",
    account: "QT内部资金调拨",
    transferFromAccount: fromAccount,
    transferToAccount: toAccount,
    amount: number(data.amount),
    currency: data.currency || "RMB",
    rate: number(data.rate) || defaultExpenseRate(data.currency || "RMB"),
    voucherName: form.voucherFile?.files?.[0]?.name || "",
    note: data.note || "",
  });
  saveState();
  document.querySelector("#transferDialog")?.close();
  render();
}

function removeRecord(type, idValue, message = "确认删除这条记录吗？") {
  if (!confirm(message)) return;
  state[type] = state[type].filter((item) => item.id !== idValue);
  saveState();
  render();
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map(csvEscape).join(",")).join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function exportShipments() {
  const headers = ["录单日期", "业务类型", "渠道", "客户单位", "客户地址", "收货人电话", "入仓号/唛头", "品名", "主单号", "运单号", "始发地", "目的地", "运输方式", "航班/船名", "清关状态", "末端派送商", "预计出发", "预计到达", "件数", "实重", "体积重", "计费重量", "卖价", "货值", "业务员", "应收保险费", "应收提货费", "应收派送费", "应收文件费", "应收登记费", "应收清关费", "应收仓储费", "其他应收", "应收备注", "应收RMB", "已核销", "未收", "运费单价", "提货费", "派送费", "文件费", "登记费", "清关费", "仓储费", "操作费", "保险费", "其他费用", "成本备注", "总计成本", "毛利润", "货物状态", "结算方式", "备注"];
  const rows = state.shipments.map((s) => {
    const st = settlement(s);
    return [s.date, s.type, s.channel, s.customer, s.customerAddress, s.receiverPhone, s.mark, s.description, s.masterNo, s.waybill, s.origin, s.destination, s.mode, s.flightNo, s.customsStatus, s.lastMile, s.etd, s.eta, s.ctn, s.weight, s.volumeWeight, s.chargeWeight, s.unitPrice, s.cargoValue, s.salesPerson, s.chargeInsurance, s.chargePickup, s.chargeDelivery, s.chargeDocument, s.chargeRegistration, s.chargeCustoms, s.chargeStorage, s.chargeOther, s.chargeNote, st.shouldReceive, st.paid, st.open, s.costFreight, s.costPickup, s.costDelivery, s.costDocument, s.costRegistration, s.costCustoms, s.costStorage, s.costHandling, s.costInsurance, s.costOther, s.costNote, st.cost, st.profit, s.shipmentStatus, s.terms, s.note];
  });
  downloadCsv("收货出货登记.csv", [headers, ...rows]);
}

function paymentExportRows() {
  return state.payments
    .slice()
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .map((p) => {
      const shipment = findShipmentByWaybill(p.waybill);
      return {
        date: p.date,
        customer: p.customer,
        masterNo: shipment?.masterNo || "",
        waybill: p.waybill,
        account: p.account,
        currency: p.currency,
        amount: number(p.amount),
        rate: number(p.rate) || 1,
        rmb: paymentRmb(p),
        receiveAccount: p.receiveAccount || "",
        voucherName: p.voucherName || "",
        method: p.method,
        note: p.note,
      };
    });
}

function paymentReportHtml(mode = "print") {
  const rows = paymentExportRows();
  const totalRmb = rows.reduce((sum, row) => sum + row.rmb, 0);
  const totalOriginal = rows.reduce((sum, row) => sum + row.amount, 0);
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  const rowHtml = rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.date)}</td>
      <td>${escapeHtml(row.customer)}</td>
      <td>${escapeHtml(row.masterNo)}</td>
      <td>${escapeHtml(row.waybill)}</td>
      <td>${escapeHtml(row.account)}</td>
      <td>${escapeHtml(row.currency)}</td>
      <td class="money">${money(row.amount)}</td>
      <td class="money">${money(row.rate)}</td>
      <td class="money">${money(row.rmb)}</td>
      <td>${escapeHtml(row.receiveAccount)}</td>
      <td>${escapeHtml(row.method)}</td>
      <td>${escapeHtml(row.voucherName)}</td>
      <td>${escapeHtml(row.note)}</td>
    </tr>
  `).join("") || `<tr><td colspan="13">暂无回款记录</td></tr>`;

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>回款核销表-${today()}</title>
  <style>
    @page { size: A4 landscape; margin: 10mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 297mm; min-height: 210mm; margin: 0 auto; padding: 12mm; background: #fff; }
    .doc-head { position: relative; min-height: 24mm; margin-bottom: 8px; }
    .logo-wrap { position: absolute; left: 0; top: 0; text-align: left; }
    .logo-wrap img { width: 62mm; height: auto; }
    h1 { margin: 0; text-align: center; font-size: 24px; padding-top: 5mm; }
    .subtitle { text-align: center; margin-top: 4px; font-size: 14px; font-weight: 700; }
    .summary { display: flex; justify-content: flex-end; gap: 22px; margin: 10px 0 8px; font-weight: 800; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 11px; table-layout: fixed; }
    th, td { border: 1px solid #111827; padding: 6px 5px; text-align: center; vertical-align: middle; overflow-wrap: anywhere; }
    th { background: #f3f4f6; font-weight: 800; }
    .money { text-align: right; font-variant-numeric: tabular-nums; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <header class="doc-head">
      ${logo ? `<div class="logo-wrap"><img src="${logo}" alt="SYNTRANX"></div>` : ""}
      <h1>回款核销表</h1>
      <div class="subtitle">Payment reconciliation report</div>
    </header>
    <div class="summary">
      <span>回款笔数：${rows.length}</span>
      <span>原币金额合计：${money(totalOriginal)}</span>
      <span>折算RMB合计：${money(totalRmb)}</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>回款日期<br>Date</th>
          <th>客户单位<br>Customer</th>
          <th>主单号<br>MAWB</th>
          <th>运单号<br>Tracking No</th>
          <th>收款负责人<br>Receiver</th>
          <th>币种<br>Currency</th>
          <th>金额<br>Amount</th>
          <th>汇率<br>Rate</th>
          <th>核销RMB<br>RMB</th>
          <th>收款账户<br>Account</th>
          <th>方式<br>Method</th>
          <th>凭证<br>Voucher</th>
          <th>备注<br>Note</th>
        </tr>
      </thead>
      <tbody>${rowHtml}</tbody>
    </table>
  </main>
</body>
</html>`;
}

function exportPaymentsPdf() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(paymentReportHtml("print"));
  printWindow.document.close();
}

function exportPaymentsExcel() {
  const html = paymentReportHtml("excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `回款核销表-${today()}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportPayments() {
  const headers = ["回款日期", "客户单位", "主单号", "运单号", "收款负责人", "币种", "回款金额", "汇率", "核销金额RMB", "收款账户", "核销方式", "凭证", "备注"];
  const rows = paymentExportRows().map((p) => [p.date, p.customer, p.masterNo, p.waybill, p.account, p.currency, p.amount, p.rate, p.rmb, p.receiveAccount, p.method, p.voucherName, p.note]);
  downloadCsv("回款核销.csv", [headers, ...rows]);
}

function exportCustomers() {
  const headers = ["客户单位", "票数", "总应收", "应收币种", "已核销", "未收", "最后业务日期"];
  const rows = customerSummary().map((c) => [c.customer, c.count, c.receivable, (c.currencies || ["RMB"]).join(" / "), c.paid, c.open, c.lastDate]);
  downloadCsv("客户单位应收汇总.csv", [headers, ...rows]);
}

function currentCustomerLedgerRows() {
  const q = document.querySelector("#customerSearch").value.trim().toLowerCase();
  return customerSummary().filter((c) => !q || c.customer.toLowerCase().includes(q));
}

function customerLedgerDirectoryHtml(mode = "print") {
  const rows = currentCustomerLedgerRows();
  const total = rows.reduce((acc, row) => {
    acc.count += number(row.count);
    acc.receivable += number(row.receivable);
    acc.paid += number(row.paid);
    acc.open += number(row.open);
    return acc;
  }, { count: 0, receivable: 0, paid: 0, open: 0 });
  const bodyRows = rows.map((row) => `
        <tr>
          <td>${escapeHtml(row.customer)}</td>
          <td>${escapeHtml(row.count)}</td>
          <td class="money">${money(row.receivable)}</td>
          <td>${escapeHtml((row.currencies || ["RMB"]).join(" / "))}</td>
          <td class="money">${money(row.paid)}</td>
          <td class="money">${money(row.open)}</td>
          <td>${escapeHtml(riskLevel(row))}</td>
          <td>${escapeHtml(row.lastDate)}</td>
        </tr>
  `).join("");
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>客户单位总账单目录</title>
  <style>
    @page { size: A4 landscape; margin: 12mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 297mm; min-height: 210mm; margin: 0 auto; padding: 12mm; background: #fff; }
    .head { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }
    .logo { width: 72mm; height: auto; }
    h1 { margin: 0; text-align: right; font-size: 24px; }
    h1 span { display: block; font-size: 15px; margin-top: 4px; }
    .meta { text-align: right; color: #4b5563; margin-top: 8px; font-size: 12px; }
    table { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 12px; }
    th, td { border: 1px solid #111827; padding: 7px 8px; text-align: center; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 800; }
    th:first-child, td:first-child { text-align: left; width: 22%; }
    th:nth-child(2), td:nth-child(2) { width: 8%; }
    th:nth-child(3), td:nth-child(3),
    th:nth-child(5), td:nth-child(5),
    th:nth-child(6), td:nth-child(6) { width: 13%; }
    th:nth-child(4), td:nth-child(4) { width: 10%; }
    th:nth-child(7), td:nth-child(7) { width: 10%; }
    th:nth-child(8), td:nth-child(8) { width: 11%; }
    td.money { text-align: right; font-variant-numeric: tabular-nums; }
    tfoot td { font-weight: 800; background: #f8fafc; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <section class="head">
      <div>${logo ? `<img class="logo" src="${logo}" alt="SYNTRANX LOGISTICS">` : ""}</div>
      <div>
        <h1>客户单位总账单目录<span>Customer Ledger Index</span></h1>
        <div class="meta">导出日期：${escapeHtml(today())}</div>
      </div>
    </section>
    <table>
      <thead>
        <tr>
          <th>客户单位</th>
          <th>票数</th>
          <th>总应收</th>
          <th>应收币种</th>
          <th>已核销</th>
          <th>未收</th>
          <th>风险等级</th>
          <th>最后业务日期</th>
        </tr>
      </thead>
      <tbody>${bodyRows || `<tr><td colspan="8">暂无客户单位账款数据</td></tr>`}</tbody>
      <tfoot>
        <tr>
          <td>合计</td>
          <td>${escapeHtml(total.count)}</td>
          <td class="money">${money(total.receivable)}</td>
          <td></td>
          <td class="money">${money(total.paid)}</td>
          <td class="money">${money(total.open)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </main>
</body>
</html>`;
}

function selectedCustomerLedgerDirectoryHtml(mode = "print") {
  const customer = selectedCustomerDetail || document.querySelector("#customerSearch")?.value.trim();
  if (!customer) return customerLedgerDirectoryHtml(mode);
  const summary = customerSummary().find((item) => item.customer === customer);
  const detailRows = customerDetailRows(customer);
  const detailTotal = detailRows.reduce((acc, row) => {
    acc.ctn += number(row.ctn);
    acc.weight += number(row.weight);
    acc.volumeWeight += number(row.volumeWeight);
    acc.receivable += number(row.shouldReceive);
    acc.paid += number(row.paid);
    acc.open += number(row.open);
    return acc;
  }, { ctn: 0, weight: 0, volumeWeight: 0, receivable: 0, paid: 0, open: 0 });
  const summaryRow = summary || {
    customer,
    count: detailRows.length,
    receivable: detailTotal.receivable,
    currencies: ["RMB"],
    paid: detailTotal.paid,
    open: detailTotal.open,
    lastDate: detailRows[0]?.date || "",
  };
  const detailBody = detailRows.map((row) => `
        <tr>
          <td>${escapeHtml(row.date)}</td>
          <td>${escapeHtml(row.masterNo || "")}</td>
          <td>${escapeHtml(row.waybill || "")}</td>
          <td>${escapeHtml(row.mark || "")}</td>
          <td>${escapeHtml(row.destination || "")}</td>
          <td>${escapeHtml(row.description || "")}</td>
          <td class="number">${number(row.ctn) || ""}</td>
          <td class="number">${money(row.weight)}</td>
          <td class="number">${money(row.volumeWeight)}</td>
          <td class="number">${money(row.chargeWeight)}</td>
          <td class="number">${money(row.unitPrice)}</td>
          <td class="number">${money(row.shouldReceive)}</td>
          <td class="number">${money(row.paid)}</td>
          <td class="number">${money(row.open)}</td>
          <td>${escapeHtml(row.status || "")}</td>
        </tr>
  `).join("");
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(customer)} 客户单位总账目录</title>
  <style>
    @page { size: A4 landscape; margin: 12mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 297mm; min-height: 210mm; margin: 0 auto; padding: 12mm; background: #fff; }
    .head { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }
    .logo { width: 66mm; height: auto; }
    h1 { margin: 0; text-align: right; font-size: 24px; }
    h1 span { display: block; font-size: 15px; margin-top: 4px; }
    .meta { text-align: right; color: #4b5563; margin-top: 8px; font-size: 12px; }
    .summary { margin: 10px 0 16px; border: 1px solid #111827; border-collapse: collapse; table-layout: fixed; width: 100%; font-size: 12px; }
    .summary th, .summary td { border: 1px solid #111827; padding: 7px 8px; text-align: center; vertical-align: middle; }
    .summary th { background: #f3f4f6; font-weight: 800; }
    table.detail { width: 100%; border-collapse: collapse; table-layout: fixed; font-size: 11px; }
    .detail th, .detail td { border: 1px solid #111827; padding: 6px 7px; text-align: center; vertical-align: middle; }
    .detail th { background: #f3f4f6; font-weight: 800; }
    .detail th:nth-child(1), .detail td:nth-child(1) { width: 7%; }
    .detail th:nth-child(2), .detail td:nth-child(2),
    .detail th:nth-child(3), .detail td:nth-child(3) { width: 10%; }
    .detail th:nth-child(4), .detail td:nth-child(4),
    .detail th:nth-child(5), .detail td:nth-child(5) { width: 7%; }
    .detail th:nth-child(6), .detail td:nth-child(6) { width: 10%; }
    .detail th:nth-child(7), .detail td:nth-child(7) { width: 5%; }
    .detail th:nth-child(8), .detail td:nth-child(8),
    .detail th:nth-child(9), .detail td:nth-child(9),
    .detail th:nth-child(10), .detail td:nth-child(10),
    .detail th:nth-child(11), .detail td:nth-child(11),
    .detail th:nth-child(12), .detail td:nth-child(12),
    .detail th:nth-child(13), .detail td:nth-child(13),
    .detail th:nth-child(14), .detail td:nth-child(14) { width: 7%; }
    .detail th:nth-child(15), .detail td:nth-child(15) { width: 7%; }
    .number { text-align: right; font-variant-numeric: tabular-nums; }
    tfoot td { font-weight: 800; background: #f8fafc; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <section class="head">
      <div>${logo ? `<img class="logo" src="${logo}" alt="SYNTRANX LOGISTICS">` : ""}</div>
      <div>
        <h1>${escapeHtml(customer)} 客户单位总账目录<span>Customer Ledger Index</span></h1>
        <div class="meta">导出日期：${escapeHtml(today())}</div>
      </div>
    </section>
    <table class="summary">
      <thead>
        <tr>
          <th>客户单位</th>
          <th>票数</th>
          <th>总应收</th>
          <th>应收币种</th>
          <th>已核销</th>
          <th>未收</th>
          <th>风险等级</th>
          <th>最后业务日期</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${escapeHtml(summaryRow.customer)}</td>
          <td>${escapeHtml(summaryRow.count)}</td>
          <td class="number">${money(summaryRow.receivable)}</td>
          <td>${escapeHtml((summaryRow.currencies || ["RMB"]).join(" / "))}</td>
          <td class="number">${money(summaryRow.paid)}</td>
          <td class="number">${money(summaryRow.open)}</td>
          <td>${escapeHtml(riskLevel(summaryRow))}</td>
          <td>${escapeHtml(summaryRow.lastDate || "")}</td>
        </tr>
      </tbody>
    </table>
    <table class="detail">
      <thead>
        <tr>
          <th>日期</th>
          <th>主单号</th>
          <th>运单号</th>
          <th>唛头</th>
          <th>目的地</th>
          <th>品名</th>
          <th>件数</th>
          <th>实重</th>
          <th>体积重</th>
          <th>计费重</th>
          <th>卖价</th>
          <th>应收</th>
          <th>已核销</th>
          <th>未收</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>${detailBody || `<tr><td colspan="15">暂无该客户单位明细</td></tr>`}</tbody>
      <tfoot>
        <tr>
          <td colspan="6">合计</td>
          <td class="number">${detailTotal.ctn || ""}</td>
          <td class="number">${money(detailTotal.weight)}</td>
          <td class="number">${money(detailTotal.volumeWeight)}</td>
          <td></td>
          <td></td>
          <td class="number">${money(detailTotal.receivable)}</td>
          <td class="number">${money(detailTotal.paid)}</td>
          <td class="number">${money(detailTotal.open)}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </main>
</body>
</html>`;
}

function exportCustomerLedgerPdf() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(customerLedgerDirectoryHtml("print"));
  printWindow.document.close();
}

function exportCustomerLedgerExcel() {
  const html = customerLedgerDirectoryHtml("excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `客户单位总账单目录-${today()}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportSelectedCustomerLedgerPdf() {
  if (!selectedCustomerDetail) {
    alert("请先点击客户单位名字打开预览，再导出该客户单位总账目录。");
    return;
  }
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(selectedCustomerLedgerDirectoryHtml("print"));
  printWindow.document.close();
}

function exportSelectedCustomerLedgerExcel() {
  if (!selectedCustomerDetail) {
    alert("请先点击客户单位名字打开预览，再导出该客户单位总账目录。");
    return;
  }
  const html = selectedCustomerLedgerDirectoryHtml("excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${selectedCustomerDetail}-客户单位总账目录-${today()}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportCustomerReceivablePdf() {
  const statement = collectSplitCustomerReceivableStatement();
  if (!statement) return;
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(splitReceivableStatementHtml(statement, "print"));
  printWindow.document.close();
}

function exportCustomerReceivableExcel() {
  const statement = collectSplitCustomerReceivableStatement();
  if (!statement) return;
  const html = splitReceivableStatementHtml(statement, "excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${statement.customer || "客户"}-客户单位应收账单.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportExpenses() {
  const headers = ["日期", "费用类别", "支付账户", "金额", "币种", "汇率", "折算RMB", "凭证", "说明"];
  const rows = reportExpenseRows().map((item) => [item.date, item.category, item.account, item.amount, item.currency || "RMB", item.rate || defaultExpenseRate(item.currency || "RMB"), expenseRmb(item), item.voucherName || "", item.note]);
  downloadCsv("费用登记.csv", [headers, ...rows]);
}

function financeReportHtml(mode = "print") {
  const summary = financeSummary();
  const categories = expenseSummary();
  const logo = mode === "print" ? (window.COMPANY_LOGO_DATA_URL || "") : "";
  const categoryRows = categories.map((item) => `
    <tr>
      <td>${escapeHtml(item.category)}</td>
      <td>${money(item.amount)}</td>
      <td>${summary.expense ? money(item.amount / summary.expense * 100) + "%" : "0.00%"}</td>
    </tr>
  `).join("") || `<tr><td colspan="3">暂无费用数据</td></tr>`;
  const expenseRows = reportExpenseRows().map((item) => `
    <tr>
      <td>${escapeHtml(item.date)}</td>
      <td>${escapeHtml(item.category)}</td>
      <td>${escapeHtml(item.account)}</td>
      <td>${money(item.amount)}</td>
      <td>${escapeHtml(item.currency || "RMB")}</td>
      <td>${money(item.rate || defaultExpenseRate(item.currency || "RMB"))}</td>
      <td>${money(expenseRmb(item))}</td>
      <td>${escapeHtml(item.voucherName || "")}</td>
      <td>${escapeHtml(item.note)}</td>
    </tr>
  `).join("") || `<tr><td colspan="9">暂无费用登记</td></tr>`;

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>财务汇总报表-${today()}</title>
  <style>
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    body { margin: 0; color: #111827; font-family: "Microsoft YaHei", Arial, sans-serif; background: ${mode === "print" ? "#f3f4f6" : "#fff"}; }
    .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 12mm; background: #fff; }
    .doc-head { position: relative; min-height: 24mm; margin-bottom: 8px; }
    .logo-wrap { position: absolute; left: 0; top: 0; text-align: left; }
    .logo-wrap img { width: 94.5mm; max-width: 45%; height: auto; }
    h1 { margin: 0; text-align: center; font-size: 24px; padding-top: 8mm; }
    .subtitle { text-align: center; color: #697386; margin-top: 4px; font-size: 12px; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 12px; }
    th, td { border: 1px solid #111827; padding: 7px 6px; text-align: center; vertical-align: middle; }
    th { background: #f3f4f6; font-weight: 800; }
    .section-title { margin: 18px 0 4px; font-size: 15px; font-weight: 800; }
    .kpi td { font-size: 14px; font-weight: 800; }
    .positive { color: #0f6b5c; }
    .negative { color: #b42318; }
    .toolbar { position: fixed; right: 18px; top: 18px; display: flex; gap: 8px; }
    .toolbar button { border: 0; border-radius: 6px; padding: 10px 14px; background: #0f6b5c; color: #fff; font-weight: 700; cursor: pointer; }
    @media print {
      body { background: #fff; }
      .page { margin: 0; width: auto; min-height: auto; padding: 0; }
      .toolbar { display: none; }
    }
  </style>
</head>
<body>
  ${mode === "print" ? `<div class="toolbar"><button onclick="window.print()">打印/另存PDF</button><button onclick="window.close()">关闭</button></div>` : ""}
  <main class="page">
    <section class="doc-head">
      ${logo ? `<div class="logo-wrap"><img src="${logo}" alt="SYNTRANX LOGISTICS"></div>` : ""}
      <h1>财务汇总报表</h1>
      <div class="subtitle">Financial Summary Report · ${escapeHtml(today())}</div>
    </section>

    <div class="section-title">经营汇总</div>
    <table class="kpi">
      <thead>
        <tr>
          <th>总收入</th>
          <th>业务总成本</th>
          <th>业务毛利</th>
          <th>日常开销</th>
          <th>净利润</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${money(summary.revenue)}</td>
          <td>${money(summary.bizCost)}</td>
          <td>${money(summary.grossProfit)}</td>
          <td>${money(summary.expense)}</td>
          <td class="${summary.netProfit >= 0 ? "positive" : "negative"}">${money(summary.netProfit)}</td>
        </tr>
      </tbody>
    </table>

    <div class="section-title">费用分类分析</div>
    <table>
      <thead><tr><th>费用类别</th><th>金额</th><th>占日常开销比例</th></tr></thead>
      <tbody>${categoryRows}</tbody>
    </table>

    <div class="section-title">费用明细</div>
    <table>
      <thead><tr><th>日期</th><th>费用类别</th><th>支付账户</th><th>金额</th><th>币种</th><th>汇率</th><th>折算RMB</th><th>凭证</th><th>说明</th></tr></thead>
      <tbody>${expenseRows}</tbody>
    </table>
  </main>
</body>
</html>`;
}

function exportFinancePdf() {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("浏览器拦截了弹窗，请允许弹窗后再导出PDF。");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(financeReportHtml("print"));
  printWindow.document.close();
}

function exportFinanceExcel() {
  const html = financeReportHtml("excel");
  const blob = new Blob(["\ufeff" + html], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `财务汇总报表-${today()}.xls`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportAll() {
  exportShipments();
  setTimeout(exportPayments, 300);
  setTimeout(exportCustomers, 600);
  setTimeout(exportExpenses, 900);
}

function parseCsvLine(line) {
  const out = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"' && quoted && line[i + 1] === '"') {
      current += '"';
      i += 1;
    } else if (ch === '"') {
      quoted = !quoted;
    } else if (ch === "," && !quoted) {
      out.push(current);
      current = "";
    } else {
      current += ch;
    }
  }
  out.push(current);
  return out;
}

function importShipmentCsv(file) {
  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || "").replace(/^\ufeff/, "");
    const rows = text.split(/\r?\n/).filter(Boolean).map(parseCsvLine);
    const [headers = [], ...dataRows] = rows;
    const at = (row, names, fallbackIndex = -1) => {
      const index = headers.findIndex((header) => names.includes(String(header || "").trim()));
      if (index >= 0) return row[index];
      return fallbackIndex >= 0 ? row[fallbackIndex] : "";
    };
    for (const row of dataRows) {
      if (!row.some(Boolean)) continue;
      state.shipments.push({
        id: id("s"),
        date: at(row, ["录单日期", "日期"], 0) || today(),
        type: at(row, ["业务类型"], 1) || "出货",
        channel: at(row, ["渠道"], 2) || "",
        customer: at(row, ["客户单位", "客户"], 3) || "",
        customerAddress: at(row, ["客户地址", "地址"]) || "",
        receiverPhone: at(row, ["收货人电话", "电话"]) || "",
        mark: at(row, ["入仓号/唛头", "唛头"], 4) || "",
        description: at(row, ["品名", "品名/备注"], 5) || "",
        masterNo: at(row, ["主单号", "外部单号", "代理单号", "航司单号", "船司单号"]) || "",
        waybill: at(row, ["运单号", "货运单号"], 6) || "",
        origin: at(row, ["始发地"], 7) || "",
        destination: at(row, ["目的地"], 8) || "",
        mode: at(row, ["运输方式", "业务类型"], 9) || "",
        flightNo: at(row, ["航班/船名"], 10) || "",
        customsStatus: at(row, ["清关状态"], 11) || "",
        lastMile: at(row, ["末端派送商"], 12) || "",
        etd: at(row, ["预计出发"], 13) || "",
        eta: at(row, ["预计到达"], 14) || "",
        ctn: number(at(row, ["件数"], 15)),
        weight: number(at(row, ["实重"], 16)),
        volumeWeight: number(at(row, ["体积重"], 17)),
        chargeWeight: number(at(row, ["计费重量"], 18)),
        unitPrice: number(at(row, ["卖价", "单价RMB", "单价"], 19)),
        cargoValue: number(at(row, ["货值"], 20)),
        salesPerson: at(row, ["业务员"]) || "",
        chargeInsurance: number(at(row, ["应收保险费"])),
        chargePickup: number(at(row, ["应收提货费"])),
        chargeDelivery: number(at(row, ["应收派送费"])),
        chargeDocument: number(at(row, ["应收文件费"])),
        chargeRegistration: number(at(row, ["应收登记费"])),
        chargeCustoms: number(at(row, ["应收清关费"])),
        chargeStorage: number(at(row, ["应收仓储费"])),
        chargeOther: number(at(row, ["其他应收"])),
        chargeNote: at(row, ["应收备注"]) || "",
        costUnit: number(at(row, ["成本单价"], 23)),
        costFreight: number(at(row, ["运费单价", "成本运费", "干线运费", "运费"], 24)),
        costPickup: number(at(row, ["成本提货费", "提货费"], 25)),
        costDelivery: number(at(row, ["成本派送费", "派送费"], 26)),
        costDocument: number(at(row, ["成本文件费", "文件费"], 27)),
        costRegistration: number(at(row, ["成本登记费", "登记费"], 28)),
        costCustoms: number(at(row, ["成本清关费", "清关费"], 29)),
        costStorage: number(at(row, ["成本仓储费", "仓储费"], 30)),
        costHandling: number(at(row, ["成本操作费", "操作费"], 31)),
        costInsurance: number(at(row, ["成本保险费", "保险费"], 32)),
        costOther: number(at(row, ["成本其他费用", "其他费用"], 33)),
        costNote: at(row, ["成本备注"], 34) || "",
        shipmentStatus: at(row, ["货物状态"], 37) || "",
        terms: at(row, ["结算方式"], 38) || "",
        note: at(row, ["备注"], 39) || "",
        deliveryDate: "",
        costStatus: "未结算N/P",
      });
    }
    saveState();
    render();
  };
  reader.readAsText(file, "utf-8");
}

function setupOperationDialogs() {
  const grid = document.querySelector(".operation-grid");
  if (!grid || grid.dataset.dialogReady === "1") return;
  const boards = [...grid.querySelectorAll(".operation-board")];
  const configs = [
    { side: "origin", title: "始发地操作", desc: "新货入仓 / 已出仓 / 转运中 / 到达目的", board: boards[0] },
    { side: "destination", title: "目的地操作", desc: "清关中 / 分拣中 / 派送中 / 已签收", board: boards[1] },
  ];
  configs.forEach((config) => {
    if (!config.board) return;
    const dialog = document.createElement("dialog");
    dialog.id = `${config.side}OperationDialog`;
    dialog.className = "modal operation-modal";
    dialog.innerHTML = `
      <div class="operation-dialog-body">
        <div class="modal-head">
          <div>
            <h3>${config.title}</h3>
            <p>${config.desc}</p>
          </div>
          <button type="button" class="icon-btn" data-close="${config.side}OperationDialog">×</button>
        </div>
      </div>
    `;
    dialog.querySelector(".operation-dialog-body").append(config.board);
    document.body.append(dialog);
  });
  grid.className = "operation-launch-grid";
  grid.innerHTML = configs.map((config) => `
    <button type="button" class="operation-launch-card" data-open-operation="${config.side}">
      <strong>${config.title}</strong>
      <span>${config.desc}</span>
      <em>打开弹窗处理</em>
    </button>
  `).join("");
  grid.dataset.dialogReady = "1";
}

function bindEvents() {
  applySidebarState(!!loadUiState().sidebarCollapsed);
  setupOperationDialogs();
  els.sidebarToggle.addEventListener("click", toggleSidebar);
  document.addEventListener("input", (event) => {
    if (event.target.matches('.date-field input[type="date"]')) updateDatePlaceholders();
  });
  document.addEventListener("change", (event) => {
    const side = event.target?.dataset?.operationSelectAll;
    if (side) setOperationSelectAll(side, event.target.checked);
  });
  els.navItems.forEach((btn) => btn.addEventListener("click", () => switchView(btn.dataset.view)));
  document.querySelectorAll("[data-jump]").forEach((btn) => btn.addEventListener("click", () => switchView(btn.dataset.jump)));
  document.querySelector("#quickShipmentBtn").addEventListener("click", () => openShipment());
  document.querySelector("#quickPaymentBtn").addEventListener("click", () => openPayment());
  document.querySelector("#statementBtn").addEventListener("click", openStatementDialog);
  document.querySelector("#openFullShipmentBtn").addEventListener("click", () => openShipment());
  document.querySelector("#openFullPaymentBtn").addEventListener("click", () => openPayment());
  document.addEventListener("keydown", handleAnyFormKeys);
  document.querySelector("#addCargoLineBtn")?.addEventListener("click", () => {
    const rows = collectCargoLinesFromDom(els.shipmentForm);
    rows.push(blankCargoLine());
    renderCargoLines(rows);
  });
  els.cargoLinesBody?.addEventListener("input", () => calculateVolumeFromCarton(els.shipmentForm, { promptForMainCharge: false }));
  els.cargoLinesBody?.addEventListener("change", () => calculateVolumeFromCarton(els.shipmentForm, { promptForMainCharge: true }));
  els.cargoLinesBody?.addEventListener("click", (event) => {
    if (!event.target.matches(".cargo-line-remove")) return;
    const rows = collectCargoLinesFromDom(els.shipmentForm);
    const currentRows = [...els.cargoLinesBody.querySelectorAll(".cargo-line-row")];
    const index = currentRows.indexOf(event.target.closest(".cargo-line-row"));
    rows.splice(index, 1);
    renderCargoLines(rows.length ? rows : [blankCargoLine()]);
  });
  document.querySelector("#addCustomerBtn").addEventListener("click", () => openCustomer());
  document.querySelector("#exportCustomerTemplateBtn").addEventListener("click", exportCustomerTemplate);
  document.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => document.getElementById(btn.dataset.close).close()));

  els.shipmentForm.addEventListener("submit", saveShipment);
  els.trackingForm?.addEventListener("submit", saveTracking);
  els.podForm?.addEventListener("submit", savePodRecord);
  els.podFileInput?.addEventListener("change", () => {
    const file = els.podFileInput.files?.[0];
    if (!file || !els.podFileStatus) return;
    els.podFileStatus.innerHTML = `<span class="pod-uploaded-text">已选择签收单</span>`;
  });
  els.paymentForm.addEventListener("submit", savePayment);
  els.customerForm.addEventListener("submit", saveCustomer);
  els.quickShipmentForm.addEventListener("submit", saveQuickShipment);
  els.quickPaymentForm.addEventListener("submit", saveQuickPayment);
  els.bookingForm?.addEventListener("submit", saveBooking);
  els.paymentForm.currency.addEventListener("change", () => syncPaymentRate(els.paymentForm));
  els.quickPaymentForm.currency.addEventListener("change", () => syncPaymentRate(els.quickPaymentForm));
  [els.paymentForm, els.quickPaymentForm].forEach((form) => {
    ["change", "blur"].forEach((eventName) => {
      form.customer?.addEventListener(eventName, () => applyPaymentCustomerCurrency(form));
    });
  });
  els.toggleShipmentDetailsBtn.addEventListener("click", () => {
    shipmentDetailsExpanded = !shipmentDetailsExpanded;
    renderShipments();
  });
  els.shipmentForm.addEventListener("keydown", handleShipmentFormKeys);
  els.quickShipmentForm.addEventListener("keydown", handleShipmentFormKeys);
  els.paymentForm.addEventListener("keydown", handleShipmentFormKeys);
  els.quickPaymentForm.addEventListener("keydown", handleShipmentFormKeys);
  els.bookingForm?.addEventListener("keydown", handleShipmentFormKeys);

  document.querySelector("#shipmentSearch").addEventListener("input", () => {
    shipmentPage = 1;
    renderShipments();
  });
  document.querySelector("#shipmentStatusFilter").addEventListener("change", () => {
    shipmentPage = 1;
    renderShipments();
  });
  els.shipmentPageSize?.addEventListener("change", (event) => {
    shipmentPageSize = number(event.target.value) || 10;
    shipmentPage = 1;
    renderShipments();
  });
  els.shipmentPrevPage?.addEventListener("click", () => {
    shipmentPage = Math.max(1, shipmentPage - 1);
    renderShipments();
  });
  els.shipmentNextPage?.addEventListener("click", () => {
    shipmentPage += 1;
    renderShipments();
  });
  document.querySelector("#paymentSearch").addEventListener("input", renderPayments);
  document.querySelector("#manifestSearch")?.addEventListener("input", renderAirlineOperations);
  document.querySelector("#exportManifestPdfBtn")?.addEventListener("click", exportManifestPdf);
  document.querySelector("#exportManifestExcelBtn")?.addEventListener("click", exportManifestExcel);
  document.querySelector("#accountFilter")?.addEventListener("change", renderAccounts);
  document.querySelector("#accountSearch")?.addEventListener("input", renderAccounts);
  document.querySelector("#exportAccountLedgerPdfBtn")?.addEventListener("click", exportAccountLedgerPdf);
  document.querySelector("#exportAccountLedgerExcelBtn")?.addEventListener("click", exportAccountLedgerExcel);
  document.querySelector("#customerSearch").addEventListener("input", () => {
    selectedCustomerDetail = "";
    renderCustomers();
    renderCustomerSearchSuggestions();
  });
  document.querySelector("#customerSearch").addEventListener("focus", renderCustomerSearchSuggestions);
  document.querySelector("#customerSearch").addEventListener("blur", () => {
    setTimeout(() => {
      if (els.customerSearchSuggest) els.customerSearchSuggest.innerHTML = "";
    }, 120);
  });
  ["#customerStartDate", "#customerEndDate", "#customerMonth"].forEach((selector) => {
    document.querySelector(selector)?.addEventListener("input", () => {
      selectedCustomerDetail = "";
      renderCustomers();
      renderCustomerSearchSuggestions();
    });
  });
  els.paymentForm.waybill.addEventListener("change", () => autofillPaymentFromWaybill(els.paymentForm));
  els.paymentForm.waybill.addEventListener("blur", () => autofillPaymentFromWaybill(els.paymentForm));
  els.paymentForm.waybill.addEventListener("input", () => autofillPaymentFromWaybill(els.paymentForm));
  els.quickPaymentForm.waybill.addEventListener("change", () => autofillPaymentFromWaybill(els.quickPaymentForm));
  els.quickPaymentForm.waybill.addEventListener("blur", () => autofillPaymentFromWaybill(els.quickPaymentForm));
  els.quickPaymentForm.waybill.addEventListener("input", () => autofillPaymentFromWaybill(els.quickPaymentForm));
  [els.shipmentForm, els.quickShipmentForm].forEach((form) => {
    ["input", "change", "blur"].forEach((eventName) => {
      form.customer?.addEventListener(eventName, () => handleCustomerUnitChange(form));
    });
    form.mark?.addEventListener("change", () => applyHabitualOptions(form));
    form.mark?.addEventListener("blur", () => applyHabitualOptions(form));
  });
  ["destination", "mark", "masterNo"].forEach((field) => {
    els.shipmentForm[field]?.addEventListener("change", () => autoGenerateWaybill(els.shipmentForm));
    els.shipmentForm[field]?.addEventListener("blur", () => autoGenerateWaybill(els.shipmentForm));
    els.quickShipmentForm[field]?.addEventListener("change", () => autoGenerateWaybill(els.quickShipmentForm));
    els.quickShipmentForm[field]?.addEventListener("blur", () => autoGenerateWaybill(els.quickShipmentForm));
  });
  els.shipmentForm.querySelectorAll('[name="weight"], [name="volumeWeight"]').forEach((input) => {
    ["input", "change", "blur", "keyup"].forEach((eventName) => {
      input.addEventListener(eventName, () => {
        autoFillChargeWeight(els.shipmentForm);
        calculateVolumeFromCarton(els.shipmentForm, { promptForMainCharge: eventName === "change" || eventName === "blur" });
      });
    });
  });
  ["ctn", "cargoWeight", "cargoChargeWeight", "weight", "volumeWeight", "chargeWeight", "bubbleMode", "mode"].forEach((field) => {
    ["input", "change", "blur", "keyup"].forEach((eventName) => {
      els.shipmentForm[field]?.addEventListener(eventName, () => {
        calculateVolumeFromCarton(els.shipmentForm, { promptForMainCharge: eventName === "change" || eventName === "blur" });
        if (!hasCargoMeasurementRows(collectCargoLinesFromDom(els.shipmentForm))) {
          syncCargoSummaryFromMainFields(els.shipmentForm);
        }
      });
    });
  });
  const costSummaryFields = ["chargeWeight", "aedRate", "usdRate", ...MONEY_KEYS, ...MONEY_KEYS.map((key) => `${key}Currency`)];
  els.shipmentForm.querySelectorAll(costSummaryFields.map((name) => `[name="${name}"]`).join(", ")).forEach((input) => {
    ["input", "change", "blur", "keyup"].forEach((eventName) => {
      input.addEventListener(eventName, updateShipmentCostSummary);
    });
  });

  document.querySelector("#exportShipmentsBtn").addEventListener("click", exportShipments);
  document.querySelector("#exportPaymentsPdfBtn").addEventListener("click", exportPaymentsPdf);
  document.querySelector("#exportPaymentsExcelBtn").addEventListener("click", exportPaymentsExcel);
  document.querySelector("#exportCustomerLedgerPdfBtn").addEventListener("click", exportCustomerLedgerPdf);
  document.querySelector("#exportCustomerLedgerExcelBtn").addEventListener("click", exportCustomerLedgerExcel);
  document.querySelector("#exportCustomerReceivablePdfBtn").addEventListener("click", exportCustomerReceivablePdf);
  document.querySelector("#exportCustomerReceivableExcelBtn").addEventListener("click", exportCustomerReceivableExcel);
  document.querySelector("#exportCustomerPreviewPdfBtn")?.addEventListener("click", exportSelectedCustomerLedgerPdf);
  document.querySelector("#exportCustomerPreviewExcelBtn")?.addEventListener("click", exportSelectedCustomerLedgerExcel);
  document.querySelector("#clearCustomerDetailBtn")?.addEventListener("click", clearCustomerDetail);
  document.querySelector("#exportCargoPdfBtn").addEventListener("click", exportCargoReceiptPdf);
  document.querySelector("#exportCargoExcelBtn").addEventListener("click", exportCargoReceiptExcel);
  document.querySelector("#exportExpensesBtn").addEventListener("click", exportExpenses);
  document.querySelector("#exportFinancePdfBtn").addEventListener("click", exportFinancePdf);
  document.querySelector("#exportFinanceExcelBtn").addEventListener("click", exportFinanceExcel);
  document.querySelector("#addExpenseDraftBtn").addEventListener("click", () => {
    syncExpenseDraftsFromDom();
    expenseDrafts.push(blankExpenseDraft());
    renderExpenseDrafts();
  });
  document.querySelector("#saveExpenseDraftsBtn").addEventListener("click", saveExpenseDrafts);
  document.querySelector("#openTransferDialogBtn")?.addEventListener("click", openTransferDialog);
  document.querySelector("#transferForm")?.addEventListener("submit", saveInternalTransfer);
  document.querySelector("#transferForm")?.currency?.addEventListener("change", (event) => {
    const form = event.target.form;
    if (form?.rate) form.rate.value = String(defaultExpenseRate(event.target.value));
  });
  els.expenseDraftRows.addEventListener("keydown", handleExpenseDraftKeys);
  els.expenseDraftRows.addEventListener("change", (event) => {
    if (!event.target.matches('[name="currency"]')) return;
    const row = event.target.closest("tr[data-expense-draft]");
    const rateInput = row?.querySelector('[name="rate"]');
    if (rateInput) rateInput.value = String(defaultExpenseRate(event.target.value));
  });
  refreshExpenseMarketRates();
  document.querySelector("#exportStatementPdfBtn").addEventListener("click", exportStatementPdf);
  document.querySelector("#exportStatementExcelBtn").addEventListener("click", exportStatementExcel);
  document.querySelector("#exportAllBtn").addEventListener("click", exportAll);

  document.querySelector("#shipmentImport").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) importShipmentCsv(file);
    event.target.value = "";
  });

  document.querySelector("#customerImport").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) importCustomerCsv(file);
    event.target.value = "";
  });

  document.querySelectorAll(".inline-add").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      addOption(form.dataset.optionKey, new FormData(form).get("value"));
      form.reset();
    });
  });

  document.querySelector("#optionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = formToObject(event.currentTarget);
    state.options.channels = splitOptions(data.channels);
    state.options.destinations = splitOptions(data.destinations);
    state.options.modes = splitOptions(data.modes);
    state.options.lastMiles = splitOptions(data.lastMiles);
    saveState();
    render();
  });
  document.querySelector("#accountRequestForm")?.addEventListener("submit", submitAccountRequest);

  document.querySelector("#resetDemoBtn").addEventListener("click", () => {
    if (!confirm("确认清空本机保存的数据吗？这个动作不能撤销。")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = structuredClone(seed);
    saveState();
    render();
  });

  document.body.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    if (!target) return;
    const editShipmentId = target.dataset.editShipment;
    const deleteShipmentId = target.dataset.deleteShipment;
    const deliveryNoteId = target.dataset.deliveryNote;
    const shipmentBillId = target.dataset.shipmentBill;
    const trackShipmentId = target.dataset.trackShipment;
    const podShipmentId = target.dataset.podShipment;
    const podViewFile = target.dataset.podViewFile;
    const podViewId = target.dataset.podView;
    const podDeleteId = target.dataset.podDelete;
    const shipmentSectionId = target.dataset.shipmentSection;
    const shipmentSectionTarget = target.dataset.sectionTarget;
    const operationShipmentId = target.dataset.operationShipment;
    const operationStatus = target.dataset.operationStatus;
    const bulkOperationSide = target.dataset.bulkOperation;
    const bulkOperationScope = target.dataset.bulkScope;
    const openOperationSide = target.dataset.openOperation;
    const editPaymentId = target.dataset.editPayment;
    const deletePaymentId = target.dataset.deletePayment;
    const editCustomerId = target.dataset.editCustomer;
    const deleteCustomerId = target.dataset.deleteCustomer;
    const deleteExpenseId = target.dataset.deleteExpense;
    const removeExpenseDraftId = target.dataset.removeExpenseDraft;
    const fillCustomerSearch = target.dataset.fillCustomerSearch;
    const previewCustomer = target.dataset.previewCustomer;
    const approveAccountId = target.dataset.approveAccount;
    const rejectAccountId = target.dataset.rejectAccount;
    const editBookingId = target.dataset.editBooking;
    const deleteBookingId = target.dataset.deleteBooking;
    if (podViewId) {
      event.preventDefault();
      event.stopPropagation();
      openPodPreview(podViewId);
      return;
    }
    if (podDeleteId) {
      event.preventDefault();
      event.stopPropagation();
      deletePodRecord(podDeleteId);
      return;
    }
    if (podViewFile) {
      alert(`已上传签收单：${podViewFile}`);
      return;
    }
    if (openOperationSide) {
      document.querySelector(`#${openOperationSide}OperationDialog`)?.showModal();
      return;
    }
    if (editBookingId) {
      openBooking((state.bookings || []).find((booking) => booking.id === editBookingId));
      return;
    }
    if (deleteBookingId) {
      removeRecord("bookings", deleteBookingId, "确认删除这条订舱记录吗？");
      return;
    }
    if (approveAccountId) {
      approveAccountRequest(approveAccountId);
      return;
    }
    if (rejectAccountId) {
      rejectAccountRequest(rejectAccountId);
      return;
    }
    if (previewCustomer) {
      previewCustomerDetail(previewCustomer);
      if (target.dataset.jump === "customers") switchView("customers");
      return;
    }
    if (fillCustomerSearch) {
      selectCustomerSearch(fillCustomerSearch);
      return;
    }
    if (removeExpenseDraftId) {
      syncExpenseDraftsFromDom();
      expenseDrafts = expenseDrafts.filter((draft) => draft.id !== removeExpenseDraftId);
      if (!expenseDrafts.length) expenseDrafts.push(blankExpenseDraft());
      renderExpenseDrafts();
      return;
    }
    if (operationShipmentId && operationStatus) {
      updateShipmentOperationStatus(operationShipmentId, operationStatus);
      return;
    }
    if (bulkOperationSide && bulkOperationScope) {
      bulkUpdateOperationStatus(bulkOperationSide, bulkOperationScope);
      return;
    }
    if (trackShipmentId) {
      openTracking(trackShipmentId);
      return;
    }
    if (shipmentSectionId) {
      openShipmentSection(shipmentSectionId, shipmentSectionTarget);
      return;
    }
    if (podShipmentId) {
      openPodRecord(podShipmentId);
      return;
    }
    if (deliveryNoteId) openDeliveryNote(deliveryNoteId);
    if (shipmentBillId) openShipmentBill(shipmentBillId);
    if (editShipmentId) openShipment(state.shipments.find((s) => s.id === editShipmentId));
    if (deleteShipmentId) removeRecord("shipments", deleteShipmentId, "确认删除这票货的登记吗？删除后不能恢复。");
    if (editPaymentId) openPayment(state.payments.find((p) => p.id === editPaymentId));
    if (deletePaymentId) removeRecord("payments", deletePaymentId);
    if (editCustomerId) openCustomer(state.profiles.find((p) => p.id === editCustomerId));
    if (deleteCustomerId) removeRecord("profiles", deleteCustomerId);
    if (deleteExpenseId) removeRecord("expenses", deleteExpenseId);
  });
}

function splitOptions(value) {
  return unique(String(value || "").split(/[、,，\n]/).map((v) => v.trim()));
}

bindEvents();
render();
