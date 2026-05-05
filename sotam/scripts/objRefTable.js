const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.TileMovement,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.TileMovement.Acts.SetSpeed,
		C3.Behaviors.TileMovement.Cnds.IsMoving,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Gemini_Generated_Image_aawkjmaawkjmaawk: 0},
	{CentrarEm: 0},
	{MovimentoEmGrid: 0},
	{WhatsAppImage20260311At: 0},
	{Sólido: 0},
	{Sprite: 0},
	{Mesa: 0},
	{arma_direita: 0},
	{Saida: 0},
	{bau: 0},
	{Teclado: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{mapa: 0},
	{Texto: 0},
	{Texto2: 0},
	{Bau: 0},
	{Mapa: 0}
];

self.InstanceType = {
	Gemini_Generated_Image_aawkjmaawkjmaawk: class extends self.ISpriteInstance {},
	WhatsAppImage20260311At: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Mesa: class extends self.ISpriteInstance {},
	arma_direita: class extends self.ISpriteInstance {},
	Saida: class extends self.ISpriteInstance {},
	bau: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	mapa: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Texto2: class extends self.ITextInstance {}
}