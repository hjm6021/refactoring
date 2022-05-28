class Test:
    def __init__(self):
        self.__parent1 = 0


class Son(Test):
    def __init__(self):
        super(Son, self).__init__()
        self.__son1 = 0


print(vars(Son()))
