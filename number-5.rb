# Ruby question; Show how to can retrieve attribute/field of a variable where the variable could be null OR the field could be null.

a = [1, 2, 3]
puts(a&.count&.even?)

a = nil
puts(a&.count&.even?)
