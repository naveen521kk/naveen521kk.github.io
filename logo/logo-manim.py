from manim import *

class SyrusDarkLogo(Scene):
    def construct(self):

        # colours and constants
        green = "#5FA172"
        blue = "#2F3954"
        radii = 1.45
        x_center = 2.05

        # config
        self.camera.background_color = WHITE

        # arcs
        p1 = Arc(
            angle=2 * np.arctan(1 / (x_center - 1)), radius=radii
        ).move_arc_center_to(np.array([-x_center, 0, 0]))
        p1.rotate(-np.arctan(1 / (x_center - 1)), about_point=p1.get_arc_center())
        pn = VGroup()
        pn.add(
            *[
                p1.copy().rotate(n * PI / 2, about_point=([0, 0, 0]))
                for n in range(1, 4)
            ],
            p1
        ).set_color(green)

        # lines
        ln = VGroup()
        ln.add(Line([1, 1, 0], [-1, -1, 0]), Line([-1, 1, 0], [1, -1, 0])).set_color(
            green
        )

        # parabolas
        curve = ParametricFunction(
            lambda v: np.array([v, 0.9 * v ** 2 + 0.1, 0]), t_range=np.array([-1, 1])
        ).set_color(blue)
        curves = VGroup()
        curves.add(
            *[
                curve.copy().rotate(n * PI / 2, about_point=([0, 0, 0]))
                for n in range(4)
            ]
        )

        # final assembly
        avatar = VGroup()
        avatar.add(pn, ln, curves)
        self.add(avatar.scale(3))
