import '@/sass/index.sass';

import kvTemplate from '@/views/components/Kv.hbs';

const hbsTemplateId = {
  kv: 'kv',
};

document.addEventListener('DOMContentLoaded', function () {
  const context = {
    message: 'Hello World',
    eventState: false,
  };
  const html = kvTemplate(context);
  document.getElementById(hbsTemplateId.kv).innerHTML = html;
});
