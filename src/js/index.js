import '@/sass/index.sass';

import helperModel from '@/js/components/model';
import kvTemplate from '@/views/components/Kv.hbs';

const hbsTemplateId = {
  kv: 'kv',
};

helperModel('我是ie不支援的燈箱ˊqˋ');

document.addEventListener('DOMContentLoaded', function () {
  const context = {
    message: 'Hello World',
    eventState: false,
  };
  const html = kvTemplate(context);
  document.getElementById(hbsTemplateId.kv).appendChild = html;
});
