/**
 * 获取模拟的list数据
 * @author ronffy
 */

const getDescribe = (localeCode) => {
  switch (localeCode) {
    case 'en':
      return 'Learning from Li Xiangyang, he resolutely refused to surrender, and finally the people were loyal to the party and to the sun every day.';
    case 'th':
      return 'การเรียนรู้ของหลี่เซี่ยงหยางและปฏิเสธที่จะยอมแพ้ในที่สุดประชาชนที่จงรักภักดีต่อพรรคทุกวันจากดวงอาทิตย์';
    case 'cn':
      return '学习李向阳，坚决不投降，终于人民忠于党，天天向太阳';
    default:
      return 'Learning from Li Xiangyang, he resolutely refused to surrender, and finally the people were loyal to the party and to the sun every day.';
  }
}

export default function getList(localeCode) {
  const list = [];
  for (let i = 1; i < 22; i++) {
    list.push({
      key: `key${i}`,
      src: `https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3049799847,4055027195&fm=26&gp=0.jpg`,
      describe: getDescribe(localeCode),
    })
  }
  return list;
}