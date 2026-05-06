const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.LocalStorage,
		C3.Plugins.Sprite,
		C3.Plugins.Keyboard,
		C3.Behaviors.TileMovement,
		C3.Plugins.Text,
		C3.Behaviors.solid,
		C3.Behaviors.TileMovement.Cnds.IsMovingDirection,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPosToObject,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{ArmazenamentoLocal: 0},
	{Sprite: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{area_coleta: 0},
	{Teclado: 0},
	{mapa_aberto: 0},
	{final: 0},
	{end: 0},
	{MovimentoEmGrid: 0},
	{Sprite7: 0},
	{Texto: 0},
	{Sólido: 0},
	{Sprite2: 0},
	{Texto2: 0},
	{pegou_mapa: 0},
	{pegou_arma: 0}
];

self.InstanceType = {
	ArmazenamentoLocal: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	area_coleta: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	mapa_aberto: class extends self.ISpriteInstance {},
	final: class extends self.ISpriteInstance {},
	end: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {}
}