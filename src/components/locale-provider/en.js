/**
 * localeProvider组件的locale - en
 * @author ronffy
 */
import compDemoList from '../demoList/localePro/en';

const locale = {
  lowVersionTip: {
    video: 'Your browser does not support video tags',
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel',
  },
  Transfer: {
    titles: ['', ''],
    notFoundContent: 'Not Found',
    searchPlaceholder: 'Search here',
  },
  Select: {
    notFoundContent: 'Not Found',
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
  },
};

export default {
  code: 'en',
  ...locale,
  compDemoList: {
    lowVersionTip: locale.lowVersionTip,
    ...compDemoList,
  }
}