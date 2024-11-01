
#  TOP_TASK

[![Build status](https://ci.appveyor.com/api/projects/status/pv6njtl95y06yyne?svg=true)](https://ci.appveyor.com/project/bugagi67/top-task)

GH_pages - https://bugagi67.github.io/top-task/


OP Tasks* (задача со звёздочкой)
Важно: эта задача не является обязательной. Её (не)выполнение не влияет на получение зачёта по ДЗ.

Легенда
Вы разрабатываете трекер задач, в котором есть возможность отображать назначенные пользователю задачи. 



Пользователь может фильтровать и добавлять (вот так вот решили проектировщики и заказчик приложения) задачи с помощью поля ввода. Некоторые задачи можно закреплять ("pin").

Описание
Добавлять задачи можно при следующих условиях: в поле ввода есть текст и пользователь нажал "Enter" (если текста нет, но пользователь всё равно нажал "Enter" должно выводиться сообщение об ошибке - предложите, как это сделать (ни в коем случае не alert и не console.*))
При добавлении задачи задача добавляется в блок "All Tasks", а поле ввода очищается
Когда закреплённых задач нет, в блоке "Pinned" должен отображаться текст "No pinned tasks"
Когда закреплённые задачи есть, они отображаются в блоке "Pinned" и не участвуют в процедуре фильтрации:
их отображение никак не зависит от состояния фильтра
они не отображаются в блоке "All Tasks"
При пустом поле ввода в блоке "All Tasks" отображаются все задачи с учётом условий предыдущего пункта (т.е. все, кроме "Pinned")
При изменении поля ввода содержимое блока "All Tasks" автоматически пересчитывается - отображаются только те задачи, название которых начинается с того, что введено в поле ввода (без учёта регистра)
Если значению поля ввода не удовлетворяет ни одна из задач, то в блоке "All Tasks" отображается текст "No tasks found"
При выставлении переключателя (круглая иконка справа) задача из блока "All Tasks" попадает в "Pinned"
При снятии переключателя (круглая иконка справа) задача из блока "Pinned" попадает в блок "All Tasks" (при этом учитывайте состояние фильтра)
Все задачи должны храниться в едином массиве в памяти JS. Каждая задача должна из себя представлять объект класса "Task" (который вы разработаете сами). Перестройка DOM-дерева должна происходить на основании объектов, хранящихся в памяти.

Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через CI.

В качестве результата пришлите проверяющему ссылку на ваш GitHub-проект. Не забудьте установить бейджик сборки.
