import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [onlineCount, setOnlineCount] = useState({ current: 347, max: 1000 });

  const privileges = [
    {
      name: "VIP",
      price: "199₽",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
      features: ["Приватные доходы", "Цветные ники", "Доступ к /fly", "Личный дом"],
      popular: false
    },
    {
      name: "PREMIUM",
      price: "399₽", 
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      features: ["Все VIP функции", "Телепорты", "Кит предметов", "Приоритет входа"],
      popular: true
    },
    {
      name: "ELITE",
      price: "699₽",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500", 
      features: ["Все PREMIUM функции", "Создание варпов", "Дополнительные слоты", "Админ-панель"],
      popular: false
    }
  ];

  const news = [
    {
      date: "15 августа",
      title: "Обновление 1.20.1 - Новые возможности!",
      description: "Добавлены новые квесты, улучшена система экономики и исправлены баги",
      type: "update"
    },
    {
      date: "12 августа", 
      title: "Техническое обслуживание завершено",
      description: "Сервер работает в обычном режиме. Производительность увеличена на 30%",
      type: "maintenance"
    },
    {
      date: "10 августа",
      title: "Скидки на все привилегии -50%!",
      description: "Акция действует до конца месяца. Не упустите шанс получить VIP статус",
      type: "sale"
    }
  ];

  const services = [
    {
      name: "Разбан",
      price: "349₽",
      icon: "Shield",
      description: "Снятие любого бана с аккаунта"
    },
    {
      name: "Размут", 
      price: "119₽",
      icon: "MessageSquare",
      description: "Возврат права писать в чат"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange to-orange-dark bg-clip-text text-transparent">
                SILVER WORLD
              </div>
              <Badge className="bg-green-600 text-white">
                <Icon name="Users" size={16} className="mr-1" />
                {onlineCount.current}/{onlineCount.max}
              </Badge>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="hover:text-orange transition-colors">Главная</a>
              <a href="#store" className="hover:text-orange transition-colors">Магазин</a>
              <a href="#privileges" className="hover:text-orange transition-colors">Привилегии</a>
              <a href="#forum" className="hover:text-orange transition-colors">Форум</a>
              <a href="#support" className="hover:text-orange transition-colors">Поддержка</a>
              <a href="#rules" className="hover:text-orange transition-colors">Правила</a>
            </nav>

            <Button size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/img/9a0f4d4e-282b-4e94-9d19-0dd53665719a.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange/20 to-transparent" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              SILVER WORLD
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Начало новой эры майнкрафт приключений
            </p>
            <p className="text-lg mb-10 text-gray-400 max-w-2xl mx-auto">
              Открой для себя огромные миры, полные веселья и миллионов друзей
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-orange to-orange-dark hover:scale-105 transition-transform px-8 py-3 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <div className="flex items-center space-x-2 text-gray-300">
                <Icon name="Server" size={18} />
                <span className="font-mono">play.silverworld.ru</span>
                <Button variant="outline" size="sm" className="text-xs">
                  Копировать
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating blocks */}
        <div className="absolute top-10 left-10 animate-float">
          <div className="w-12 h-12 bg-brown opacity-60 rounded-sm rotate-12" />
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-8 h-8 bg-orange opacity-40 rounded-sm -rotate-12" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-10 h-10 bg-silver opacity-30 rounded-sm rotate-45" />
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Новости и Обновления</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Следите за последними новостями Silver World и будьте в курсе всех изменений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">{item.date}</span>
                    <Badge variant={item.type === 'sale' ? 'destructive' : item.type === 'update' ? 'default' : 'secondary'}>
                      {item.type === 'sale' ? 'Акция' : item.type === 'update' ? 'Обновление' : 'Техработы'}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privileges Section */}
      <section id="store" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Донат Привилегии</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Поддержи сервер и получи эксклюзивные возможности в игре
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {privileges.map((privilege, index) => (
              <Card key={index} className={`relative bg-gray-800/50 border-gray-700 hover:scale-105 transition-transform ${privilege.popular ? 'ring-2 ring-orange' : ''}`}>
                {privilege.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-orange text-white">Популярный</Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 ${privilege.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Icon name="Crown" size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{privilege.name}</CardTitle>
                  <div className="text-3xl font-bold text-orange">{privilege.price}</div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {privilege.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-orange to-orange-dark hover:scale-105 transition-transform"
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Услуги</h2>
            <p className="text-gray-400">Дополнительные услуги для комфортной игры</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-orange/10 to-orange-dark/10 border-orange/20 hover:bg-orange/20 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={service.icon as any} size={24} className="text-orange" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-orange">{service.price}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Button variant="outline" className="border-orange text-orange hover:bg-orange hover:text-white">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Server Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наш Сервер</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <Icon name="Users" size={32} className="mx-auto text-orange mb-2" />
                <CardTitle>Онлайн: {onlineCount.current}</CardTitle>
                <CardDescription>Из {onlineCount.max} слотов</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <Icon name="MessageSquare" size={32} className="mx-auto text-orange mb-2" />
                <CardTitle>Форум</CardTitle>
                <CardDescription>Общение с игроками</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <Icon name="Shield" size={32} className="mx-auto text-orange mb-2" />
                <CardTitle>Поддержка</CardTitle>
                <CardDescription>Помощь 24/7</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <Icon name="FileText" size={32} className="mx-auto text-orange mb-2" />
                <CardTitle>Правила</CardTitle>
                <CardDescription>Правила сервера</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange to-orange-dark bg-clip-text text-transparent mb-4">
                SILVER WORLD
              </div>
              <p className="text-gray-400 text-sm">
                © 2025 Silver World. Все права защищены.<br/>
                Сервер не связан с Mojang AB.<br/>
                Все средства идут на развитие проекта.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ссылки</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="text-gray-400 hover:text-orange transition-colors">Главная</a></div>
                <div><a href="#" className="text-gray-400 hover:text-orange transition-colors">Форум</a></div>
                <div><a href="#" className="text-gray-400 hover:text-orange transition-colors">Правила</a></div>
                <div><a href="#" className="text-gray-400 hover:text-orange transition-colors">Описание привилегий</a></div>
                <div><a href="#" className="text-gray-400 hover:text-orange transition-colors">Способы оплаты</a></div>
                <div><a href="#" className="text-gray-400 hover:text-orange transition-colors">Проверка через AnyDesk</a></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-700 hover:border-blue-500">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-700 hover:border-red-500">
                  <Icon name="Youtube" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-700 hover:border-purple-500">
                  <Icon name="MessageSquare" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;