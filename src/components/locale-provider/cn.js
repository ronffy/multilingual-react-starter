/**
 * localeProvider组件的locale - cn
 * @author ronffy
 */
import compDemoList from '../demoList/localePro/cn';

const locale = {
  lowVersionTip: {
    video: '您的浏览器不支持 video 标签',
  },
  Table: {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: '暂无数据',
    selectAll: '全选当页',
    selectInvert: '反选当页',
  },
  Modal: {
    okText: '确定',
    cancelText: '取消',
    justOkText: '知道了',
  },
  Popconfirm: {
    cancelText: '取消',
    okText: '确定',
  },
  Transfer: {
    notFoundContent: '无匹配结果',
    searchPlaceholder: '请输入搜索内容',
  },
  Select: {
    notFoundContent: '无匹配结果',
  },
  Upload: {
    uploading: '文件上传中',
    removeFile: '删除文件',
    uploadError: '上传错误',
    previewFile: '预览文件',
  },
};

export default {
  code: 'cn',
  ...locale,
  compDemoList: {
    lowVersionTip: locale.lowVersionTip,
    ...compDemoList,
  }
}
