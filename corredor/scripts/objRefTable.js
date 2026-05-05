const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.scrollto.Acts.SetEnabled,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{chao: 0},
	{fundo_porao: 0},
	{CentrarEm: 0},
	{Plataforma: 0},
	{personagem: 0},
	{Teclado: 0},
	{parede: 0},
	{PlanoDeFundoEmBlocos: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{stop: 0},
	{change: 0},
	{fim: 0}
];

self.InstanceType = {
	chao: class extends self.ITiledBackgroundInstance {},
	fundo_porao: class extends self.ITiledBackgroundInstance {},
	personagem: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	parede: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	stop: class extends self.ISpriteInstance {},
	change: class extends self.ISpriteInstance {},
	fim: class extends self.ISpriteInstance {}
}