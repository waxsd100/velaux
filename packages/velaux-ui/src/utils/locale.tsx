import { getLanguage } from '../utils/common';
const localeData = {
  en: {
    momentLocale: 'en',
    Timeline: {
      expand: 'Expand',
      fold: 'Fold',
    },
    Balloon: {
      close: 'Close',
    },
    Card: {
      expand: 'Expand',
      fold: 'Fold',
    },
    Dialog: {
      close: 'Close',
      ok: 'OK',
      cancel: 'Cancel',
    },
    Drawer: {
      close: 'Close',
    },
    Message: {
      closeAriaLabel: 'Close',
    },
    Pagination: {
      prev: 'Prev',
      next: 'Next',
      goTo: 'Go To',
      page: 'Page',
      go: 'Go',
      total: 'Page {current} of {total} pages.',
      labelPrev: 'Prev page, current page {current}',
      labelNext: 'Next page, current page {current}',
      inputAriaLabel: 'Please enter the page to jump to',
      selectAriaLabel: 'Please select page size',
      pageSize: 'Page Size:',
    },
    Input: {
      clear: 'Clear',
    },
    List: {
      empty: 'No Data',
    },
    Select: {
      selectPlaceholder: 'Please select',
      autoCompletePlaceholder: 'Please enter',
      notFoundContent: 'No Options',
      maxTagPlaceholder: '{selected}/{total} items have been selected.',
      selectAll: 'Select All',
    },
    Table: {
      empty: 'No Data',
      ok: 'OK',
      reset: 'Reset',
      asc: 'Asc',
      desc: 'Desc',
      expanded: 'Expanded',
      folded: 'Folded',
      filter: 'Filter',
      selectAll: 'Select All',
    },
    Upload: {
      card: {
        cancel: 'Cancel',
        delete: 'Delete',
      },
      upload: {
        delete: 'Delete',
      },
    },
    Search: {
      buttonText: 'Search',
    },
    Tag: {
      delete: 'Delete',
    },
    Switch: {
      on: 'On',
      off: 'Off',
    },
    Tab: {
      closeAriaLabel: 'Close',
    },
    DatePicker: {
      placeholder: 'Select Date',
      datetimePlaceholder: 'Select Date and Time',
      monthPlaceholder: 'Select Month',
      yearPlaceholder: 'Select Year',
      weekPlaceholder: 'Select Week',
      quarterPlaceholder: 'Select Quarter',
      startPlaceholder: 'Start Date',
      endPlaceholder: 'End Date',
      timeStartPlaceholder: 'Start Time',
      timeEndPlaceholder: 'End Time',
      ok: 'OK',
      clear: 'Clear',
      now: 'Now',
      selectTime: 'Select Time',
      selectDate: 'Select Date',
    },
    TimePicker: {
      placeholder: 'Select Time',
      clear: 'Clear',
      hour: 'H',
      minute: 'M',
      second: 'S',
    },
    Calendar: {
      today: 'Today',
      now: 'Now',
      ok: 'OK',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      prevDecade: 'Previous Decade',
      nextDecade: 'Next Decade',
      yearSelectAriaLabel: 'Select Year',
      monthSelectAriaLabel: 'Select Month',
    },
  },
  ja: {
    momentLocale: 'ja',
    Timeline: {
      expand: '展開',
      fold: '折りたたむ',
    },
    Balloon: {
      close: '閉じる',
    },
    Card: {
      expand: '展開',
      fold: '折りたたむ',
    },
    Dialog: {
      close: '閉じる',
      ok: 'OK',
      cancel: 'キャンセル',
    },
    Drawer: {
      close: '閉じる',
    },
    Message: {
      closeAriaLabel: '閉じる',
    },
    Pagination: {
      prev: '前へ',
      next: '次へ',
      goTo: '移動',
      page: 'ページ',
      go: '移動',
      total: '{current} / {total} ページ',
      labelPrev: '前のページ、現在 {current} ページ',
      labelNext: '次のページ、現在 {current} ページ',
      inputAriaLabel: '移動先のページを入力してください',
      selectAriaLabel: '1 ページあたりの表示件数を選択してください',
      pageSize: '表示件数:',
    },
    Input: {
      clear: 'クリア',
    },
    List: {
      empty: 'データがありません',
    },
    Select: {
      selectPlaceholder: '選択してください',
      autoCompletePlaceholder: '入力してください',
      notFoundContent: '選択肢がありません',
      maxTagPlaceholder: '{selected}/{total} 件選択済み',
      selectAll: 'すべて選択',
    },
    Table: {
      empty: 'データがありません',
      ok: 'OK',
      reset: 'リセット',
      asc: '昇順',
      desc: '降順',
      expanded: '展開済み',
      folded: '折りたたみ済み',
      filter: 'フィルター',
      selectAll: 'すべて選択',
    },
    Upload: {
      card: {
        cancel: 'キャンセル',
        delete: '削除',
      },
      upload: {
        delete: '削除',
      },
    },
    Search: {
      buttonText: '検索',
    },
    Tag: {
      delete: '削除',
    },
    Switch: {
      on: 'オン',
      off: 'オフ',
    },
    Tab: {
      closeAriaLabel: '閉じる',
    },
    DatePicker: {
      placeholder: '日付を選択',
      datetimePlaceholder: '日時を選択',
      monthPlaceholder: '月を選択',
      yearPlaceholder: '年を選択',
      weekPlaceholder: '週を選択',
      quarterPlaceholder: '四半期を選択',
      startPlaceholder: '開始日',
      endPlaceholder: '終了日',
      timeStartPlaceholder: '開始時刻',
      timeEndPlaceholder: '終了時刻',
      ok: 'OK',
      clear: 'クリア',
      now: '現在',
      selectTime: '時刻を選択',
      selectDate: '日付を選択',
    },
    TimePicker: {
      placeholder: '時刻を選択',
      clear: 'クリア',
      hour: '時',
      minute: '分',
      second: '秒',
    },
    Calendar: {
      today: '今日',
      now: '現在',
      ok: 'OK',
      clear: 'クリア',
      month: '月',
      year: '年',
      prevYear: '前年',
      nextYear: '翌年',
      prevMonth: '前月',
      nextMonth: '翌月',
      prevDecade: '前の10年',
      nextDecade: '次の10年',
      yearSelectAriaLabel: '年を選択',
      monthSelectAriaLabel: '月を選択',
    },
  },
  zh: {
    momentLocale: 'zh-cn',
    Timeline: {
      expand: '展开',
      fold: '收起',
    },
    Balloon: {
      close: '关闭',
    },
    Card: {
      expand: '展开',
      fold: '收起',
    },
    Dialog: {
      close: '关闭',
      ok: '确认',
      cancel: '取消',
    },
    Drawer: {
      close: '关闭',
    },
    Message: {
      closeAriaLabel: '关闭标签',
    },
    Pagination: {
      prev: '前一页',
      next: '下一页',
      goTo: '去往',
      page: '分页',
      go: '去',
      total: 'Page {current} of {total} pages.',
      labelPrev: '前一页, 当前页 {current}',
      labelNext: '下一页, 当前页 {current}',
      inputAriaLabel: '请输入要跳转到的页面',
      selectAriaLabel: '请选择页面展示的数量',
      pageSize: '每页显示多少条:',
    },
    Input: {
      clear: '清空',
    },
    List: {
      empty: '没有数据',
    },
    Select: {
      selectPlaceholder: '请选择',
      autoCompletePlaceholder: '请输入',
      notFoundContent: '没有可选项',
      maxTagPlaceholder: '{selected}/{total} 条目已选择.',
      selectAll: '全选',
    },
    Table: {
      empty: '没有数据',
      ok: '确认',
      reset: '重置',
      asc: '生序',
      desc: '降序',
      expanded: '展开',
      folded: '收起',
      filter: '过滤',
      selectAll: '全选',
    },
    Upload: {
      card: {
        cancel: '取消',
        delete: '删除',
      },
      upload: {
        delete: '删除',
      },
    },
    Search: {
      buttonText: '搜索',
    },
    Tag: {
      delete: '删除',
    },
    Switch: {
      on: '打开',
      off: '关闭',
    },
    Tab: {
      closeAriaLabel: '关闭',
    },
  },
};

class SingletonLocal {
  private constructor() {}
  private static instance: SingletonLocal | null = null;
  static getInstance(): SingletonLocal {
    this.instance = this.instance || new SingletonLocal();
    return this.instance;
  }
  private local: any;
  setLocal(value: any) {
    this.local = value;
  }
  getLocal() {
    return (lang?: string) => {
      const language = lang || getLanguage();
      return this.local[language] ?? this.local.en;
    };
  }
}
SingletonLocal.getInstance().setLocal(localeData);
export const locale = SingletonLocal.getInstance().getLocal();
