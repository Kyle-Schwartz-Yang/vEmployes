- Решение включает в себя управляемый Акардин-Спойлер
- Параметр атрибуты data-spollers Помогает установить активацию спойлер при адаптиве.
- Наличие атрибута data-one-spoller, Сообщает что это будет Акардион. (тоесть при удалении его это будет спойлер)

### PUG

- `_Accordion(customItems, switchAttr, adaptiveAttr)`

- customItems - атибрут-массив заполнения контента и сожержимого (можно оставить пустым).
- switchAttr - Переключатель, имеет объект с одним параметром `data-one-spoller`, (Спойлер // Акардион).
- adaptiveAttr - Контралировать активацией аккардиона на адаптиве.

```pug

//- Заполнить контентом
+_Accordion( [ { title: 1, content: 'lorem' } ], {}, {'data-spollers': '800, max'} )

//- Передать массив, данных по умолчанию если null
+_Accordion(null, {'data-one-spoller': ''}, {'data-spollers': '768, max'})

//- ----------------------------------------------------------------
  //- Адаптивный Аккардион
.accordion( data-one-spoller='', data-spollers = '768, max' )
+_Accordion( null, {'data-one-spoller': ''}, {'data-spollers': '768, max'} )

  //- Адаптивный Спойлер
.accordion(data-spollers = '800, min')
+_Accordion( null, {}, {'data-spollers': '768, min'} )

  //- Обычный Аккардион (по умолчанию, всегда активен)
.accordion(data-spollers = '', data-one-spoller='')
+_Accordion( null, {'data-one-spoller': ''}, {'data-spollers': ''} )
  //- ----------------------------------------------------------------


  //- Активировать акардион.
  .accordion__title._active
```

# Информация

```js
/*
### Атрибуты

  - Для родителя слойлеров пишем атрибут data-spollers
  - Для заголовков слойлеров пишем атрибут data-spoller

  > Если нужно включать\выключать работу спойлеров на разных размерах экранов пишем параметры ширины и типа брейкпоинта.

  ### Например:
  - data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
  - data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

  > Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
```
