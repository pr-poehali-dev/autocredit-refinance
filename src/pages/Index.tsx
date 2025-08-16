import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Index() {
  const [clientData, setClientData] = useState({
    name: 'Дикун М.А.',
    applicationNumber: 'А/С 2547-25',
    approvedAmount: '1 281 111',
    creditTerm: '96',
    monthlyPayment: '19 692',
    totalAmount: '1 890 432',
    overpayment: '609 321',
    kaskoTerm: '5'
  });

  const updateField = (field: string, value: string) => {
    setClientData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Tabs defaultValue="main" className="w-full">
        {/* Header */}
        <header className="bg-primary text-primary-foreground py-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon name="Building2" size={32} />
                <div>
                  <h1 className="text-2xl font-bold">ВТБ Банк</h1>
                  <p className="text-sm opacity-90">Надёжное банковское решение</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right text-xs opacity-75">
                  <p>CRM система кредитного отдела</p>
                  <p>Кабинет № К-5695-25</p>
                  <p>Старший кредитный специалист Лапин Е.А.</p>
                </div>
                <Badge variant="secondary" className="text-sm font-medium">
                  Одобренная заявка
                </Badge>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <TabsList className="bg-primary-foreground/20">
                <TabsTrigger value="main" className="text-primary-foreground data-[state=active]:bg-primary-foreground data-[state=active]:text-primary">
                  Основная страница
                </TabsTrigger>
                <TabsTrigger value="params" className="text-primary-foreground data-[state=active]:bg-primary-foreground data-[state=active]:text-primary">
                  Параметры
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </header>

        <TabsContent value="main" className="mt-0">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  Заявка одобрена
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Рефинансирование автокредита
                </h1>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                  <p className="text-lg text-foreground mb-2">
                    <strong>Клиент:</strong> {clientData.name}
                  </p>
                  <p className="text-lg text-foreground">
                    <strong>Номер заявки:</strong> {clientData.applicationNumber}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <Icon name="Banknote" size={32} className="mx-auto mb-3 text-primary" />
                      <div className="text-2xl font-bold text-primary mb-1">{clientData.approvedAmount} ₽</div>
                      <p className="text-muted-foreground">Одобренная сумма</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <Icon name="Calendar" size={32} className="mx-auto mb-3 text-primary" />
                      <div className="text-2xl font-bold text-primary mb-1">{clientData.creditTerm} месяцев</div>
                      <p className="text-muted-foreground">Срок кредита</p>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <Icon name="CreditCard" size={32} className="mx-auto mb-3 text-primary" />
                      <div className="text-2xl font-bold text-primary mb-1">{clientData.monthlyPayment} ₽</div>
                      <p className="text-muted-foreground">Ежемесячный платёж</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50">
                    <Icon name="CheckCircle" size={14} className="mr-1" />
                    Досрочное погашение без штрафов
                  </Badge>
                  <Badge variant="outline" className="text-blue-700 border-blue-300 bg-blue-50">
                    <Icon name="Shield" size={14} className="mr-1" />
                    Без дополнительных комиссий
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Conditions Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Условия рефинансирования</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="TrendingUp" size={24} className="mr-3 text-primary" />
                        Выгодные условия
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Процентная ставка</span>
                        <Badge>Льготная</Badge>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span>Страховые продукты</span>
                        <span className="text-green-600 font-medium">Не включены в тело кредита</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <span>Досрочное погашение</span>
                        <span className="text-green-600 font-medium">Без ограничений</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Calculator" size={24} className="mr-3 text-primary" />
                        Расчёт платежей
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-primary mb-2">{clientData.monthlyPayment} ₽</div>
                          <p className="text-muted-foreground">в месяц</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Общая сумма</p>
                          <p className="font-semibold">{clientData.totalAmount} ₽</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Переплата</p>
                          <p className="font-semibold">{clientData.overpayment} ₽</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* KASKO Requirements */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <Icon name="ShieldCheck" size={48} className="mx-auto mb-4 text-primary" />
                  <h2 className="text-3xl font-bold mb-4">Требования к страхованию КАСКО</h2>
                  <p className="text-muted-foreground text-lg">
                    Для завершения процедуры рефинансирования необходимо предоставить страховой полис
                  </p>
                </div>

                <Card className="border-orange-200 bg-orange-50/50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-orange-800">
                      <Icon name="AlertTriangle" size={24} className="mr-3" />
                      Обязательные требования
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center">
                          <Icon name="Shield" size={20} className="mr-2 text-primary" />
                          Покрываемые риски
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center">
                            <Icon name="Check" size={16} className="mr-2 text-green-600" />
                            Угон транспортного средства
                          </li>
                          <li className="flex items-center">
                            <Icon name="Check" size={16} className="mr-2 text-green-600" />
                            Полная гибель (тотал)
                          </li>
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center">
                          <Icon name="Calendar" size={20} className="mr-2 text-primary" />
                          Срок действия
                        </h4>
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <p className="text-lg font-bold text-primary">{clientData.kaskoTerm} лет единовременно</p>
                          <p className="text-sm text-muted-foreground">Полис должен быть оформлен сразу на весь период</p>
                        </div>
                      </div>
                    </div>

                    <Separator />
                    
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-2 flex items-center text-blue-800">
                        <Icon name="Info" size={20} className="mr-2" />
                        Важная информация
                      </h4>
                      <ul className="text-sm space-y-1 text-blue-700">
                        <li>• Полис оформляется клиентом самостоятельно</li>
                        <li>• Стоимость полиса НЕ включается в тело кредита</li>
                        <li>• Полис должен быть предоставлен до завершения процедуры</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Required Documents */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Необходимые документы</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="FileText" size={24} className="mr-3 text-primary" />
                        Основные документы
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="mr-3 text-green-600" />
                          <span>Паспорт гражданина РФ</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="mr-3 text-green-600" />
                          <span>Водительское удостоверение</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="mr-3 text-green-600" />
                          <span>ПТС транспортного средства</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="mr-3 text-green-600" />
                          <span>СТС транспортного средства</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name="Shield" size={24} className="mr-3 text-primary" />
                        Страховые документы
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <Icon name="AlertCircle" size={16} className="mr-3 text-orange-600" />
                          <span>Полис КАСКО на {clientData.kaskoTerm} лет</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="mr-3 text-green-600" />
                          <span>Полис ОСАГО</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Info" size={16} className="mr-3 text-blue-600" />
                          <span>Справка о страховой истории</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Контактная информация</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Icon name="Phone" size={32} className="mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Телефон</h3>
                      <p className="text-muted-foreground mb-2">Горячая линия ВТБ</p>
                      <p className="font-bold text-primary">8 800 100-24-24</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Icon name="MapPin" size={32} className="mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Офис</h3>
                      <p className="text-muted-foreground mb-2">Ближайшее отделение</p>
                      <Button variant="outline" size="sm">Найти офис</Button>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <Icon name="Globe" size={32} className="mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Интернет-банк</h3>
                      <p className="text-muted-foreground mb-2">ВТБ Онлайн</p>
                      <Button variant="outline" size="sm">Войти</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Notice */}
          <section className="py-8 bg-muted">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-xs text-muted-foreground leading-relaxed">
                  <h4 className="font-semibold mb-2">Правовые основания:</h4>
                  <p className="mb-2">
                    На основании пункта 3 статьи 8 Федерального закона № 130-ФЗ «Об обязательных видах страхования», 
                    Банк в соответствии с действующим законодательством Российской Федерации, в частности, статьями 
                    Гражданского кодекса РФ и законом «Об обязательных видах страхования» (ФЗ-40 от 25.04.2002), 
                    а также внутренними нормативными актами банка ВТБ, банк имеет право вносить коррективы при 
                    оформлении рефинансирования кредита и устанавливать свои условия рефинансирования автокредита, 
                    в том числе требовать предоставление страхового полиса КАСКО.
                  </p>
                  <p>
                    Данные меры направлены на защиту интересов как заёмщика, так и активов банка, обеспечивая 
                    финансовую безопасность и минимизацию рисков, связанных с возможной неплатёжеспособностью 
                    по рефинансированному кредиту.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="params" className="mt-0">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold mb-8 text-center">Параметры заявки</h1>
              
              <Card>
                <CardHeader>
                  <CardTitle>Редактирование данных</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">ФИО клиента</Label>
                      <Input
                        id="name"
                        value={clientData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="applicationNumber">Номер заявки</Label>
                      <Input
                        id="applicationNumber"
                        value={clientData.applicationNumber}
                        onChange={(e) => updateField('applicationNumber', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="approvedAmount">Одобренная сумма (₽)</Label>
                      <Input
                        id="approvedAmount"
                        value={clientData.approvedAmount}
                        onChange={(e) => updateField('approvedAmount', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="creditTerm">Срок кредита (месяцы)</Label>
                      <Input
                        id="creditTerm"
                        value={clientData.creditTerm}
                        onChange={(e) => updateField('creditTerm', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="monthlyPayment">Ежемесячный платёж (₽)</Label>
                      <Input
                        id="monthlyPayment"
                        value={clientData.monthlyPayment}
                        onChange={(e) => updateField('monthlyPayment', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="totalAmount">Общая сумма к возврату (₽)</Label>
                      <Input
                        id="totalAmount"
                        value={clientData.totalAmount}
                        onChange={(e) => updateField('totalAmount', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="overpayment">Переплата (₽)</Label>
                      <Input
                        id="overpayment"
                        value={clientData.overpayment}
                        onChange={(e) => updateField('overpayment', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="kaskoTerm">Срок требования КАСКО (лет)</Label>
                      <Input
                        id="kaskoTerm"
                        value={clientData.kaskoTerm}
                        onChange={(e) => updateField('kaskoTerm', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-2">
                      <Icon name="Info" size={20} className="mr-2 text-blue-600" />
                      <h4 className="font-semibold text-blue-800">Информация</h4>
                    </div>
                    <p className="text-sm text-blue-700">
                      Изменения автоматически применяются к основной странице. 
                      Переключитесь на вкладку "Основная страница", чтобы увидеть результат.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Icon name="Building2" size={24} />
                <span className="text-xl font-bold">ВТБ Банк</span>
              </div>
            </div>
          </div>
        </footer>
      </Tabs>
    </div>
  );
}