const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.Anchor,
		C3.Plugins.Text,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{cenario: 0},
	{Sólido: 0},
	{chao: 0},
	{Plataforma: 0},
	{Nico: 0},
	{Teclado: 0},
	{botao: 0},
	{vazio: 0},
	{morte: 0},
	{Âncora: 0},
	{caixa: 0},
	{Sprite7: 0},
	{pass: 0},
	{Texto: 0},
	{movimento: 0}
];

self.InstanceType = {
	cenario: class extends self.ISpriteInstance {},
	chao: class extends self.ISpriteInstance {},
	Nico: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	botao: class extends self.ISpriteInstance {},
	vazio: class extends self.ISpriteInstance {},
	morte: class extends self.ISpriteInstance {},
	caixa: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	pass: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {}
}