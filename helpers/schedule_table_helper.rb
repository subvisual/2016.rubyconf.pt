module ScheduleTableHelper
  def schedule_table_entry(index)
    klass = "mobilePadded" if index.even?
    klass = "day2" if index.odd?
    content_tag :div, class: "ScheduleTable-entry #{klass}" do
      yield
    end
  end
end
