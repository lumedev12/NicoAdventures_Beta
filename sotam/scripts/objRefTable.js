const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Behaviors.TileMovement.Cnds.IsMovingDirection,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.TileMovement.Acts.SetEnabled,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{cenario_Sotao: 0},
	{MovimentoEmGrid: 0},
	{nico: 0},
	{Sólido: 0},
	{colisao: 0},
	{passagem: 0},
	{Texto: 0},
	{Teclado: 0},
	{telapreta: 0}
];

self.InstanceType = {
	cenario_Sotao: class extends self.ISpriteInstance {},
	nico: class extends self.ISpriteInstance {},
	colisao: class extends self.ISpriteInstance {},
	passagem: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Teclado: class extends self.IInstance {},
	telapreta: class extends self.ISpriteInstance {}
}