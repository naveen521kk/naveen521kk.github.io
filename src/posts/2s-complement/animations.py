from manim import *

class BinNumber(Scene):
    def construct(self):
        num_store = 45
        bin_num = bin(num_store)[2:]
        helpt = Tex(f"{num_store} stored in binary").move_to(UP * 2)
        print(bin_num)
        squares = VGroup()
        for bin_bit in bin_num:
            _sq = Square(1.5)
            _txt = Tex(bin_bit)
            _txt.move_to(_txt)
            squares.add(VGroup(_sq, _txt))
        squares.arrange(buff=0)
        
        helpt.next_to(squares, DOWN * 2)
        self.add(squares, helpt)
