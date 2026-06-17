const fs = require('fs');

const updateJson = (filePath, lang) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (lang === 'zh') {
    data.meta.title = "Parque Mirador Sur (Mirador Del Sur Joaquín Balaguer Park) | 圣多明戈的城市绿肺与天然海景台";
    data.meta.description = "探索 Parque Mirador Sur，圣多明戈首个大型生态休闲公园。建于石灰岩悬崖高台之上，可俯瞰加勒比海风光，地下隐藏天然溶洞，是体验自然与城市文化交融的绝佳去处。";
    
    data.hero.title = "Parque Mirador Sur (Mirador Del Sur Joaquín Balaguer Park)";
    data.hero.subtitle = "圣多明戈的城市绿肺与天然海景台";
    data.hero.hours = "城市公园 / 自然休闲区";

    data.intro.title = "探索 Parque Mirador Sur";
    data.intro.description = "Mirador Del Sur Joaquín Balaguer Park（常被当地人简称为 Mirador Sur）是圣多明戈首个大型生态休闲公园，于1970年落成。公园巧妙地建于巨大的石灰岩悬崖高台之上，不仅拥有葱郁的绿地和茂密的植被，还能让游客在此俯瞰壮丽的加勒比海（Caribbean Sea）风光。\n\n这里不仅是多米尼加首都重要的公共空间，其地下更隐藏着错综复杂的天然溶洞网络，部分洞穴甚至被改造成了极具特色的顶级餐厅，是体验圣多明戈自然与城市文化交融的绝佳去处。";
    
    data.intro.visitGuide = {
      title: "游览建议",
      items: [
        "公园官方管理处开放时间为周一至周五 08:00–17:00",
        "周六和周日官方管理处休息，但作为开放式城市空间可正常游览",
        "著名的“健康大道”在清晨和周末是跑步和骑行的好去处",
        "建议携带宠物并使用牵引绳，注意清理排泄物",
        "探索天然石灰岩溶洞，欣赏加勒比海绝美风光"
      ]
    };
    
    data.intro.alsoKnownAs = {
      title: "核心亮点与设施",
      items: [
        "🐾 宠物友好 (Pet-Friendly)：公园欢迎游客携带狗狗入内，宽阔的草坪是宠物奔跑的理想场所。（建议使用牵引绳并随手清理排泄物）",
        "🏃‍♂️ 健康大道 (Av. de la Salud)：在每天特定的清晨和傍晚时段，部分路段会限制机动车通行，专为慢跑者、骑行者和轮滑爱好者开放。",
        "🧗 天然石灰岩溶洞：探索悬崖底部的独特地质构造，感受加勒比海岛国独特的地形魅力。",
        "🌊 加勒比海全景：漫步于高台步道，享受无遮挡的绝美海景，是拍摄日落与城市天际线的绝佳机位。"
      ]
    };

    data.route.title = "建议游览路线";
    data.route.overview = "探索 Parque Mirador Sur 的推荐路线：";
    data.route.steps = [
      "清晨活力路线：从 Av. Anacaona 侧的主入口进入 👉 带着您的爱犬在草坪漫步 👉 沿着高台步道欣赏加勒比海晨景 👉 在健康大道与当地市民一起体验晨跑氛围。",
      "午后休闲路线：下午抵达公园 👉 探索悬崖周边的自然景观与雕塑 👉 在休闲区域野餐 👉 傍晚时分前往公园周边的洞穴餐厅体验独特的加勒比美食。"
    ];
    data.route.supplementsTitle = "游览补充建议";
    data.route.supplements = [
      "由于地势较高，部分区域风力较大，建议做好防风措施。",
      "如果是周末前往，周边官方服务设施可能暂停营运，请提前准备好饮用水。",
      "溶洞餐厅需要提前预订，建议提早安排行程。"
    ];

    data.basicInfo.title = "核心标签 (Quick Facts)";
    data.basicInfo.officialNameValue = "Parque Mirador Sur (Mirador Del Sur Joaquín Balaguer Park)";
    data.basicInfo.typeValue = "城市公园 / 自然休闲区";
    data.basicInfo.petFriendly = "宠物准入";
    data.basicInfo.petFriendlyValue = "允许带狗（宠物友好型公园）";
    data.basicInfo.tickets = "门票信息";
    data.basicInfo.ticketsValue = "免费开放";
    data.basicInfo.address = "位置";
    data.basicInfo.addressValue = "Av. Anacaona &, Santo Domingo, 多米尼加共和国";
    data.basicInfo.plusCodeValue = "C2RR+RJ";
    data.basicInfo.phone = "官方联系电话";

    data.hours.title = "开放时间与游览建议 (Visitor Info)";
    data.hours.outdoor = "官方管理处";
    data.hours.outdoorTime = "周一至周五：08:00 – 17:00";
    data.hours.summer = "周六及周日";
    data.hours.summerTime = "管理处及部分官方服务设施休息";
    data.hours.winter = "游览提示";
    data.hours.winterTime = "作为大型开放式城市空间，公园依然可以享受自然绿地";
    data.hours.warning = "💡 本地人贴士 (Local Insider Tip)";
    data.hours.warningTime = "虽然谷歌地图显示的官方营业时间在周末关闭且仅限白天，但 Mirador Sur 作为一个大型开放式城市空间，其著名的“健康大道”（Avenida de la Salud）在清晨和周末依然是当地市民跑步、骑行和遛狗的黄金地段。如果您计划在周末前往，依然可以享受公园的自然绿地，但请注意周边官方服务设施可能暂停营运。";
    data.hours.tip = "清晨和傍晚是游览的最佳时段，尤其是漫步高台步道欣赏海景。";

    data.historyTimeline.title = "发展与地质特征";
    data.historyTimeline.items = [
      {
        "year": "1970年",
        "title": "1970年：公园落成",
        "plaque": "首个大型生态公园",
        "description": "Mirador Del Sur Joaquín Balaguer Park 是圣多明戈首个大型生态休闲公园，于1970年落成，旨在为市民提供优美的公共休闲空间。"
      },
      {
        "year": "地质特征",
        "title": "石灰岩悬崖高台",
        "plaque": "独特的地理位置",
        "description": "公园巧妙地建于巨大的石灰岩悬崖高台之上，不仅拥有葱郁的绿地和茂密的植被，还能让游客在此俯瞰壮丽的加勒比海风光。"
      },
      {
        "year": "地下景观",
        "title": "天然溶洞网络",
        "plaque": "自然与城市交融",
        "description": "公园地下隐藏着错综复杂的天然溶洞网络，部分洞穴甚至被改造成了极具特色的顶级餐厅，是体验多米尼加独特地形魅力的绝佳去处。"
      }
    ];

  } else if (lang === 'en') {
    data.basicInfo.petFriendly = "Pet Friendly";
    data.basicInfo.petFriendlyValue = "Dogs allowed (Pet-friendly park)";
    data.basicInfo.tickets = "Tickets";
    data.basicInfo.ticketsValue = "Free admission";
  } else if (lang === 'es') {
    data.basicInfo.petFriendly = "Mascotas permitidas";
    data.basicInfo.petFriendlyValue = "Se admiten perros (Parque que admite mascotas)";
    data.basicInfo.tickets = "Entradas";
    data.basicInfo.ticketsValue = "Entrada gratuita";
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

updateJson('./src/messages/zh.json', 'zh');
updateJson('./src/messages/en.json', 'en');
updateJson('./src/messages/es.json', 'es');
console.log('JSON files updated successfully.');
