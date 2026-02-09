
import React, { useState } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  UserPlus, 
  LogIn, 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  Newspaper,
  Calendar,
  Users,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { PageKey } from './types';
import { PAGE_CONTENT, NEWS_DATA } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 圖片設定
  const logoUrl = 'https://www.csatc.com/tstn/logo-web.png';
  const heroBg = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920';

  // 根據主目錄分類設定 6 張不同的 Banner 圖片
  const getBannerImage = (page: PageKey): string => {
    const banners: Record<string, string> = {
      // 關於協會 (mission, charter, structure, board)
      about: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920',
      // 會務公告
      announcement: 'https://www.csatc.com/tstn/b2.jpg',
      // 最新消息 (news, industry)
      news: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1920',
      // 研討會
      seminar: 'https://www.csatc.com/tstn/b4.jpg',
      // 活動花絮
      events: 'https://www.csatc.com/tstn/b5-1.jpg',
      // 會員專區 (join, login)
      member: 'https://www.csatc.com/tstn/b6.jpg'
    };

    if (['mission', 'charter', 'structure', 'board'].includes(page)) return banners.about;
    if (page === 'announcement') return banners.announcement;
    if (['news', 'industry'].includes(page)) return banners.news;
    if (page === 'seminar') return banners.seminar;
    if (page === 'events') return banners.events;
    if (['join', 'login'].includes(page)) return banners.member;
    return banners.about; // 預設值
  };

  const navigateTo = (page: PageKey) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 首頁專屬區塊
  const HomeSection = () => (
    <div className="animate-in fade-in duration-500">
      <section className="relative h-[500px] flex items-center justify-center text-center text-white px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{ 
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.65)), url('${heroBg}')`,
          }}
        />
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span>推動智慧城市轉型</span>
            <br />
            <span>引領科技創新未來</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            <span>致力於結合桃園在地產業與全球智慧科技，打造永續發展的智慧生活圈。</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => navigateTo('mission')} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition shadow-lg"
            >
              了解我們
            </button>
            <button 
              onClick={() => navigateTo('join')} 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-8 py-3 rounded-full font-medium transition"
            >
              加入會員
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <div className="container mx-auto px-4 -mt-16 mb-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Newspaper />, title: '會務公告', desc: '掌握協會最新行政公告、會議紀錄及重大政策變動。', target: 'announcement' as PageKey },
            { icon: <Calendar />, title: '研討會資訊', desc: '定期舉辦智慧科技研討會，邀請產業專家分享最新技術與趨勢。', target: 'seminar' as PageKey },
            { icon: <Users />, title: '會員專區', desc: '專屬會員的產業報告、媒合機會及交流平台，立即加入我們。', target: 'join' as PageKey }
          ].map((item, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition duration-300 ${idx === 1 ? 'border-t-4 border-blue-600' : ''}`}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                <span>{item.title}</span>
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                <span>{item.desc}</span>
              </p>
              <button 
                onClick={() => navigateTo(item.target)} 
                className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm"
              >
                查看更多 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* News Preview */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">最新消息</h2>
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </div>
          <button onClick={() => navigateTo('news')} className="text-blue-600 hover:underline">查看全部</button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((news) => (
            <div key={news.id} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition">
              <div className="h-48 bg-slate-200">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span className={`px-2 py-0.5 rounded ${news.type === 'association' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                    {news.category}
                  </span>
                  <span>{news.date}</span>
                </div>
                <h4 className="font-bold text-lg mb-2 line-clamp-2">{news.title}</h4>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{news.description}</p>
                <button className="text-blue-600 text-sm font-medium">閱讀全文</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="cursor-pointer flex items-center py-2" onClick={() => navigateTo('home')}>
              <img src={logoUrl} alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 font-medium text-slate-700">
            <li className="relative group py-4">
              <button className="flex items-center gap-1 hover:text-blue-600 transition">
                關於協會 <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-xl rounded-b-lg border-t-2 border-blue-600 overflow-hidden">
                {['mission', 'charter', 'structure', 'board'].map((k) => (
                  <button 
                    key={k}
                    onClick={() => navigateTo(k as PageKey)}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition text-sm border-b border-slate-100 last:border-0"
                  >
                    {PAGE_CONTENT[k].title}
                  </button>
                ))}
              </div>
            </li>
            
            <li><button onClick={() => navigateTo('announcement')} className="hover:text-blue-600 transition">會務公告</button></li>

            <li className="relative group py-4">
              <button className="flex items-center gap-1 hover:text-blue-600 transition">
                最新消息 <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-48 bg-white shadow-xl rounded-b-lg border-t-2 border-blue-600 overflow-hidden">
                <button onClick={() => navigateTo('news')} className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition text-sm border-b border-slate-100">協會消息</button>
                <button onClick={() => navigateTo('industry')} className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition text-sm">產業要聞</button>
              </div>
            </li>

            <li><button onClick={() => navigateTo('seminar')} className="hover:text-blue-600 transition">研討會</button></li>
            <li><button onClick={() => navigateTo('events')} className="hover:text-blue-600 transition">活動花絮</button></li>

            <li className="relative group">
              <button className="flex items-center gap-1 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md">
                會員專區 <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block w-48 bg-white shadow-xl rounded-lg border border-slate-100 overflow-hidden">
                <button onClick={() => navigateTo('join')} className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition text-sm flex items-center gap-2">
                  <UserPlus size={16} /> 加入會員
                </button>
                <button onClick={() => navigateTo('login')} className="w-full text-left px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition text-sm flex items-center gap-2 border-t border-slate-100">
                  <LogIn size={16} /> 會員登入
                </button>
              </div>
            </li>
          </ul>

          <button className="lg:hidden text-slate-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-8 shadow-inner animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-6">
              <div>
                <div className="font-bold text-blue-900 mb-3 text-lg">關於協會</div>
                <div className="grid grid-cols-2 gap-3 pl-4">
                  {['mission', 'charter', 'structure', 'board'].map(k => (
                    <button key={k} onClick={() => navigateTo(k as PageKey)} className="text-left text-slate-600 text-sm py-1">{PAGE_CONTENT[k].title}</button>
                  ))}
                </div>
              </div>
              <button onClick={() => navigateTo('announcement')} className="font-bold text-blue-900 text-left text-lg">會務公告</button>
              <div>
                <div className="font-bold text-blue-900 mb-3 text-lg">最新消息</div>
                <div className="grid grid-cols-2 gap-3 pl-4">
                  <button onClick={() => navigateTo('news')} className="text-left text-slate-600 text-sm py-1">協會消息</button>
                  <button onClick={() => navigateTo('industry')} className="text-left text-slate-600 text-sm py-1">產業要聞</button>
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-slate-100">
                <button onClick={() => navigateTo('join')} className="flex-1 bg-blue-50 text-blue-600 py-3 rounded-xl font-bold">加入會員</button>
                <button onClick={() => navigateTo('login')} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-bold">會員登入</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <HomeSection />
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            {/* 子頁面橫幅 (Banner) - 自動根據 PageKey 切換背景 */}
            <section className="relative h-[250px] md:h-[350px] flex items-center justify-center text-center text-white overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(30, 58, 138, 0.4)), url('${getBannerImage(currentPage)}')`,
                }}
              />
              <div className="relative z-10 px-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-[0.2em] drop-shadow-lg">
                  {PAGE_CONTENT[currentPage]?.title || '子頁面'}
                </h1>
                <div className="h-1.5 w-24 bg-blue-600 mx-auto mt-6 rounded-full shadow-lg"></div>
              </div>
            </section>

            {/* 子頁面內容區 */}
            <section className="container mx-auto px-4 py-12 md:py-16 min-h-[500px]">
              <nav className="mb-8 text-sm text-slate-500 flex items-center gap-2">
                <button onClick={() => navigateTo('home')} className="hover:text-blue-600 transition">首頁</button>
                <ChevronRight className="w-3 h-3" />
                <span className="text-blue-600 font-medium">
                  {PAGE_CONTENT[currentPage]?.title || '子頁面'}
                </span>
              </nav>
              
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                {PAGE_CONTENT[currentPage]?.content(navigateTo) || (
                  <div className="text-center py-20 text-slate-400">頁面內容建置中，敬請期待。</div>
                )}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
            {/* 區塊 1: 品牌資訊 */}
            <div className="flex flex-col">
              <div className="inline-block mb-6">
                <img src={logoUrl} alt="Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-80">
                我們致力於推動桃園市的智慧科技進步，媒合產官學研各界資源，共同開創智慧科技的新紀元。
              </p>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-blue-400 transition"><Facebook /></a>
                <a href="#" className="hover:text-blue-400 transition"><Instagram /></a>
                <a href="#" className="hover:text-blue-400 transition"><Youtube /></a>
              </div>
            </div>

            {/* 區塊 2: 快速連結 (置中對齊) */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-white font-bold mb-6 text-lg">快速連結</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => navigateTo('mission')} className="hover:text-blue-400 transition">關於協會</button></li>
                <li><button onClick={() => navigateTo('news')} className="hover:text-blue-400 transition">最新消息</button></li>
                <li><button onClick={() => navigateTo('seminar')} className="hover:text-blue-400 transition">研討會資訊</button></li>
                <li><button onClick={() => navigateTo('events')} className="hover:text-blue-400 transition">活動花絮</button></li>
              </ul>
            </div>

            {/* 區塊 3: 聯絡資訊 */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold mb-6 text-lg">聯絡資訊</h4>
              <ul className="space-y-4 text-sm opacity-80">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>330 桃園市桃園區陽明十二街32巷21號1樓</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>(03) 123-4567</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>service@tstda.org.tw</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>週一至週五 09:00 - 18:00</span>
                </li>
              </ul>
            </div>

            {/* 區塊 4: 地理位置 */}
            <div className="flex flex-col">
              <h4 className="text-white font-bold mb-6 text-lg">地理位置</h4>
              <div className="w-full h-40 bg-slate-800 rounded-lg overflow-hidden relative group">
                <img src="https://www.csatc.com/tstn/map.png" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-slate-900/80 px-3 py-1 rounded text-xs text-slate-300">Google Map 預覽</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs">
            <p className="opacity-60">&copy; 2024 桃園市智慧科技發展協會 版權所有. Taoyuan Smart Technology Development Association.</p>
            <div className="flex gap-4 mt-4 md:mt-0 opacity-60">
              <a href="#" className="hover:underline">隱私權政策</a>
              <a href="#" className="hover:underline">使用條款</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-8 right-8 bg-white text-blue-600 p-3 rounded-full shadow-2xl border border-slate-100 hover:shadow-blue-200 transition transform hover:scale-110 z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default App;
