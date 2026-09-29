<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.0" name="RoomBlocks" tilewidth="32" tileheight="48" spacing="0" margin="0" tilecount="20" columns="4">
  <tileoffset x="-8" y="4"/>
  <grid orientation="orthogonal" width="16" height="16"/>
  <image source="../images/RoomBlocks.png" width="128" height="240"/>
  <tile id="16" probability="0.3"/>
  <tile id="17" probability="0.2"/>
  <wangsets>
    <wangset name="Terrain set 1" type="edge" tile="-1">
      <wangcolor name="Wall Terrain" color="#fe04bb" tile="10" probability="1"/>
      <wangtile tileid="1" wangid="0,0,1,0,0,0,0,0"/>
      <wangtile tileid="2" wangid="0,0,1,0,0,0,1,0"/>
      <wangtile tileid="3" wangid="0,0,0,0,0,0,1,0"/>
      <wangtile tileid="4" wangid="0,0,0,0,1,0,0,0"/>
      <wangtile tileid="5" wangid="0,0,1,0,1,0,0,0"/>
      <wangtile tileid="6" wangid="0,0,1,0,1,0,1,0"/>
      <wangtile tileid="7" wangid="0,0,0,0,1,0,1,0"/>
      <wangtile tileid="8" wangid="1,0,0,0,1,0,0,0"/>
      <wangtile tileid="9" wangid="1,0,1,0,1,0,0,0"/>
      <wangtile tileid="10" wangid="1,0,1,0,1,0,1,0"/>
      <wangtile tileid="11" wangid="1,0,0,0,1,0,1,0"/>
      <wangtile tileid="12" wangid="1,0,0,0,0,0,0,0"/>
      <wangtile tileid="13" wangid="1,0,1,0,0,0,0,0"/>
      <wangtile tileid="14" wangid="1,0,1,0,0,0,1,0"/>
      <wangtile tileid="15" wangid="1,0,0,0,0,0,1,0"/>
      <wangtile tileid="16" wangid="0,0,1,0,0,0,1,0"/>
      <wangtile tileid="17" wangid="0,0,1,0,0,0,1,0"/>
    </wangset>
  </wangsets>
</tileset>